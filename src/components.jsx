/* eslint-disable react-refresh/only-export-components */
/* ============================================================
   COMPONENTS — Form & Flavour Studio
   ============================================================ */
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CartContext } from "./App.jsx";

/* ---- icons ---- */
export const Arrow = ({ s = 16 }) => (
  <svg className="arrow" width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconInstagram = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export const IconPinterest = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2a10 10 0 0 0-3.6 19.3c-.08-.8-.16-2 .03-2.9.18-.77 1.14-4.9 1.14-4.9s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.37 0 .84-.53 2.09-.81 3.25-.23.98.49 1.78 1.45 1.78 1.74 0 3.08-1.84 3.08-4.5 0-2.35-1.69-4-4.1-4a4.25 4.25 0 0 0-4.43 4.26c0 .84.32 1.75.73 2.24a.3.3 0 0 1 .07.28c-.08.31-.25.98-.28 1.12-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.3-1.15l-.62 2.39c-.23.86-.83 1.94-1.24 2.6A10 10 0 1 0 12 2Z"
      fill="currentColor"
    />
  </svg>
);

export const IconMail = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ============================================================
   SmartImage — Unsplash hotlink with graceful brand fallback
   ============================================================ */
export function SmartImage({ src, alt, ratio, label, className = "", style = {} }) {
  const [state, setState] = useState("loading"); // loading | ok | err
  const wrapStyle = { ...style };
  if (ratio) wrapStyle.aspectRatio = ratio;
  return (
    <div
      className={`imgwrap ${state === "loading" ? "loading" : ""} ${className}`}
      style={wrapStyle}
    >
      {state === "err" ? (
        <div className="ph">
          <span>{label || "Form & Flavour"}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setState("ok")}
          onError={() => setState("err")}
        />
      )}
    </div>
  );
}

/* ============================================================
   Reveal — fade-in-on-scroll
   ============================================================ */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ============================================================
   NAV
   ============================================================ */
const NAV_ITEMS = [
  { to: "/furniture", label: "Furniture" },
  { to: "/chocolates", label: "Chocolates" },
  { to: "/recipes", label: "Recipes" },
  { to: "/tours", label: "Tours" },
  { to: "/journal", label: "Journal" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

export function Nav({ onDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { cart, setCartOpen } = useContext(CartContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`nav ${scrolled ? "scrolled" : ""} ${onDark ? "on-dark" : ""} ${open ? "menu-open" : ""}`}
      >
        <div className="nav-inner">
          <Link to="/" className="brandmark" aria-label="Form & Flavour Studio — home">
            Form <span className="amp">&amp;</span> Flavour
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {it.label}
              </NavLink>
            ))}
            <button className="nav-link cart-btn" onClick={() => setCartOpen(true)}>
              Cart ({cart.length})
            </button>
            <NavLink to="/contact" className="nav-cta">
              Enquire
            </NavLink>
          </nav>
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {[{ to: "/", label: "Home" }, ...NAV_ITEMS, { to: "/contact", label: "Enquire" }].map(
            (it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) => `drawer-link ${isActive ? "active" : ""}`}
                style={{ display: "block" }}
              >
                {it.label}
              </NavLink>
            )
          )}
          <button
            className="drawer-link cart-btn"
            style={{ display: "block", textAlign: "left", width: "100%", padding: 0 }}
            onClick={() => {
              setOpen(false);
              setCartOpen(true);
            }}
          >
            Cart ({cart.length})
          </button>
        </nav>
        <div className="drawer-foot">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <IconInstagram s={16} /> Instagram
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <IconPinterest s={16} /> Pinterest
          </a>
          <a
            href="mailto:hello@formandflavour.studio"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <IconMail s={16} /> Email
          </a>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   CART DRAWER
   ============================================================ */
export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, clearCart } = useContext(CartContext);
  const [checkingOut, setCheckingOut] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (cartOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const total = cart.reduce((acc, it) => acc + (it.price || 0), 0);

  const handleCheckout = () => {
    setCheckingOut(true);
    const orderNo = `FF-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTimeout(() => {
      clearCart();
      setCheckingOut(false);
      setCartOpen(false);
      setOrderId(orderNo);
      setShowSuccess(true);
    }, 1800);
  };

  return (
    <>
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`cart-drawer ${cartOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <header className="cart-head">
          <h2 className="h3">Your Cart</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
            ✕
          </button>
        </header>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty.</p>
              <button
                className="tlink"
                onClick={() => setCartOpen(false)}
                style={{ marginTop: 20 }}
              >
                Continue shopping <Arrow s={14} />
              </button>
            </div>
          ) : (
            <ul className="cart-list">
              {cart.map((it, i) => (
                <li key={i} className="cart-item">
                  <div className="cart-item-img">
                    <img src={it.img} alt={it.title} />
                  </div>
                  <div className="cart-item-info">
                    <span className="cart-item-title">{it.title}</span>
                    <span className="cart-item-price">£{it.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="cart-foot">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>£{total}</span>
            </div>
            <button
              className="btn btn-terra btn-full"
              onClick={handleCheckout}
              disabled={checkingOut}
            >
              {checkingOut ? "Processing..." : "Checkout"}
            </button>
          </footer>
        )}
      </div>

      {/* Checkout Success Modal */}
      <div
        className={`checkout-modal-overlay ${showSuccess ? "open" : ""}`}
        onClick={() => setShowSuccess(false)}
        aria-hidden="true"
      >
        <div className="checkout-success-modal" onClick={(e) => e.stopPropagation()}>
          <button
            className="lb-close"
            onClick={() => setShowSuccess(false)}
            aria-label="Close success message"
            style={{ top: 20, right: 20, width: 40, height: 40, fontSize: "1rem" }}
          >
            ✕
          </button>

          <div className="checkout-success-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h2 className="h2" style={{ marginBottom: 12 }}>
            Order Confirmed
          </h2>
          <span
            className="label"
            style={{
              color: "var(--terra)",
              fontSize: "0.8rem",
              display: "block",
              marginBottom: 24,
            }}
          >
            Order: {orderId}
          </span>

          <p
            className="lead"
            style={{ fontSize: "1rem", marginBottom: 24, color: "var(--ink-soft)" }}
          >
            Thank you for ordering from the studio. We have received your commission request and
            small goods purchase. A studio assistant will contact you in the next 24 hours to
            confirm your custom requirements and shipping details.
          </p>

          <div
            style={{
              background: "var(--cream-2)",
              padding: 20,
              borderRadius: 8,
              textAlign: "left",
              marginBottom: 30,
              fontSize: "0.9rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: "var(--ink-soft)" }}>Delivery Method</span>
              <strong>Courier Insured</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: "var(--ink-soft)" }}>Dispatch Date</span>
              <strong>Next Tuesday</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--ink-soft)" }}>Studio Status</span>
              <strong style={{ color: "var(--terra)" }}>Crafting in Progress</strong>
            </div>
          </div>

          <button className="btn btn-terra btn-full" onClick={() => setShowSuccess(false)}>
            Return to Studio
          </button>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
export function Footer() {
  return (
    <footer className="footer-cool">
      <div className="footer-top wrap-wide">
        <div className="footer-cta">
          <Reveal as="span" className="label" style={{ color: "var(--terra-soft)" }}>
            Start a project
          </Reveal>
          <Reveal
            as="h2"
            className="h1"
            style={{ marginTop: 24, fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            Let's make
            <br />
            <span className="serif-italic" style={{ color: "var(--terra)" }}>
              something
            </span>{" "}
            by hand.
          </Reveal>
          <Reveal style={{ marginTop: 40 }}>
            <Link to="/contact" className="btn btn-terra btn-large">
              Get in touch <Arrow s={18} />
            </Link>
          </Reveal>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <span className="label col-h">Studio</span>
            <div className="footer-nav">
              <Link to="/furniture">Upholstered Furniture</Link>
              <Link to="/chocolates">Painted Chocolates</Link>
              <Link to="/recipes">Recipe Development</Link>
              <Link to="/tours">Food Tours &amp; Pub Crawls</Link>
              <Link to="/journal">The Journal</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About the Studio</Link>
            </div>
          </div>
          <div className="footer-col">
            <span className="label col-h">Elsewhere</span>
            <div className="footer-nav">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <IconInstagram s={16} /> Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <IconPinterest s={16} /> Pinterest
              </a>
              <a
                href="mailto:hello@formandflavour.studio"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <IconMail s={16} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-massive-brand" aria-hidden="true">
        FORM &amp; FLAVOUR
      </div>

      <div className="footer-bottom wrap-wide">
        <span>© {new Date().getFullYear()} Form &amp; Flavour Studio. All rights reserved.</span>
        <span>London · By appointment</span>
      </div>
    </footer>
  );
}

/* ============================================================
   ServiceCard — used on home "four crafts" grid
   ============================================================ */
export function ServiceCard({ craft, i }) {
  return (
    <Reveal as={Link} to={craft.to} className="svc-card" delay={i * 80}>
      <div className="svc-media">
        <SmartImage
          src={craft.img}
          alt={`${craft.nm} — Form & Flavour Studio`}
          ratio="4 / 5"
          label={craft.nm}
        />
        <span className="svc-num kicker-num">{craft.n}</span>
      </div>
      <div className="svc-body">
        <h3 className="h3">{craft.nm}</h3>
        <p className="measure-tight" style={{ marginTop: 10, color: "var(--ink-soft)" }}>
          {craft.sub}
        </p>
        <span className="tlink" style={{ marginTop: 16 }}>
          Explore <Arrow s={15} />
        </span>
      </div>
    </Reveal>
  );
}

/* ============================================================
   GalleryGrid — masonry (furniture) + Lightbox driver
   ============================================================ */
export function GalleryGrid({ items, variant = "masonry" }) {
  const [idx, setIdx] = useState(-1);
  const open = idx >= 0;

  const close = useCallback(() => setIdx(-1), []);
  const next = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      {variant === "masonry" ? (
        <div className="gal">
          {items.map((it, i) => (
            <Reveal
              key={it.id}
              className="gal-item"
              onClick={() => setIdx(i)}
              delay={(i % 3) * 60}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIdx(i);
                }
              }}
              aria-label={`View ${it.nm}`}
            >
              <SmartImage
                src={it.img}
                alt={`${it.nm} — ${it.mat}, ${it.yr}`}
                ratio={`1 / ${it.h}`}
                label={it.nm}
              />
              <div className="gal-cap">
                <span className="nm">{it.nm}</span>
                <span className="meta">
                  {it.mat} · <span className="yr">{it.yr}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="grid-3">
          {items.map((it, i) => (
            <Reveal
              key={it.id}
              className="gal-item"
              onClick={() => setIdx(i)}
              delay={(i % 3) * 70}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIdx(i);
                }
              }}
              aria-label={`View ${it.nm}`}
            >
              <SmartImage src={it.img} alt={`${it.nm} — ${it.col}`} ratio="1 / 1" label={it.nm} />
              <div className="gal-cap">
                <span className="nm">{it.nm}</span>
                <span className="meta yr">{it.col}</span>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <div
        className={`lightbox ${open ? "open" : ""}`}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {open && (
          <>
            <button className="lb-close" onClick={close} aria-label="Close">
              ✕
            </button>
            <button
              className="lb-nav lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="lb-nav lb-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              ›
            </button>
            <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
              <img className="lb-img" src={items[idx].img} alt={items[idx].nm} />
              <div className="lb-cap">
                <div className="nm">{items[idx].nm}</div>
                <div className="meta">
                  {items[idx].mat ? `${items[idx].mat} · ${items[idx].yr}` : items[idx].col}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* ============================================================
   ContactForm — client-side validation
   ============================================================ */
const SERVICES = [
  "Upholstered Furniture",
  "Painted Chocolates",
  "Recipe Development",
  "Food Tours & Pub Crawls",
  "Something else",
];

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", service: "", message: "" });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Please tell us your name.";
    if (!v.email.trim()) e.email = "An email lets us reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      e.email = "That email doesn't look right.";
    if (!v.service) e.service = "Pick the closest service.";
    if (v.message.trim().length < 12) e.message = "A line or two of detail, please.";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-ok">
        <h3 className="h3">Thank you, {v.name.split(" ")[0]}.</h3>
        <p style={{ color: "var(--ink-soft)" }}>
          Your note about <strong>{v.service.toLowerCase()}</strong> has landed. We reply to every
          enquiry within two working days — usually with a few questions of our own.
        </p>
        <button
          className="tlink"
          style={{ marginTop: 18, background: "none", border: 0, cursor: "pointer", padding: 0 }}
          onClick={() => {
            setSent(false);
            setV({ name: "", email: "", service: "", message: "" });
          }}
        >
          Send another <Arrow s={15} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className={`field ${errs.name ? "invalid" : ""}`}>
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          type="text"
          value={v.name}
          onChange={set("name")}
          placeholder="Jane Maker"
          autoComplete="name"
        />
        {errs.name && <span className="err">{errs.name}</span>}
      </div>
      <div className={`field ${errs.email ? "invalid" : ""}`}>
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          value={v.email}
          onChange={set("email")}
          placeholder="you@studio.com"
          autoComplete="email"
        />
        {errs.email && <span className="err">{errs.email}</span>}
      </div>
      <div className={`field ${errs.service ? "invalid" : ""}`}>
        <label htmlFor="cf-service">Service of interest</label>
        <select id="cf-service" value={v.service} onChange={set("service")}>
          <option value="" disabled>
            Choose one…
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errs.service && <span className="err">{errs.service}</span>}
      </div>
      <div className={`field ${errs.message ? "invalid" : ""}`}>
        <label htmlFor="cf-message">Tell us about it</label>
        <textarea
          id="cf-message"
          value={v.message}
          onChange={set("message")}
          placeholder="A chair to reupholster, a menu to develop, a date you'd like to book…"
        />
        {errs.message && <span className="err">{errs.message}</span>}
      </div>
      <button type="submit" className="btn btn-terra">
        Send enquiry <Arrow />
      </button>
    </form>
  );
}

/* ============================================================
   usePageMeta — per-page title + meta description (SEO)
   ============================================================ */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.setAttribute("content", description);
  }, [title, description]);
}
