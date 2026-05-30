/* ============================================================
   PAGES — Home · Furniture · Chocolates
   ============================================================ */
import React from "react";
import { Link } from "react-router-dom";
import {
  Arrow,
  SmartImage,
  Reveal,
  Nav,
  Footer,
  ServiceCard,
  GalleryGrid,
  usePageMeta
} from "./components.jsx";
import {
  U,
  FURNITURE,
  CHOCOLATES,
  RECIPES,
  TOURS,
  CRAFTS
} from "./data.js";

/* ---------- HOME ---------- */
export function Home() {
  usePageMeta(
    "Form & Flavour Studio — Crafted objects. Curated tastes.",
    "A multidisciplinary London craft studio: bespoke upholstered furniture, hand-painted chocolates, recipe development, and food tours & pub crawls."
  );
  const heroRef = React.useRef(null);
  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bg = hero.querySelector("[data-parallax]");
    const soft = hero.querySelector("[data-parallax-soft]");
    const inner = hero.querySelector(".hero-copy");
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;

    const apply = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (bg) bg.style.transform = `scale(1.06) translate(${cx * 16}px, ${cy * 16}px)`;
      if (soft) soft.style.transform = `translate(${cx * -10}px, ${cy * -7}px)`;
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(apply) : 0;
    };
    const onMove = (e) => {
      if (reduce) return;
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    // gentle scroll-driven drift + fade as you leave the hero
    const onScroll = () => {
      if (reduce || !inner) return;
      const y = Math.min(window.scrollY, 620);
      inner.style.setProperty("--scrolly", `${y * 0.16}px`);
      inner.style.setProperty("--fade", String(Math.max(0, 1 - y / 540)));
    };
    hero.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      hero.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <main>
      <Nav onDark />

      {/* HERO — split editorial */}
      <section className="hero" aria-label="Introduction" ref={heroRef}>
        <div className="hero-copy">
          <span className="label hero-tag">Form &amp; Flavour Studio — London</span>
          <h1 className="hero-title" data-parallax-soft>
            <span className="line-mask"><span className="line-in">Crafted</span></span>
            <span className="line-mask"><span className="line-in">objects.</span></span>
            <span className="line-mask"><span className="line-in serif-italic amp">Curated tastes.</span></span>
          </h1>
          <p className="hero-lead lead">
            One studio working across four crafts — furniture, chocolate, the recipe and the table — each made
            slowly, by hand, with the same eye.
          </p>
          <div className="hero-actions">
            <Link to="/furniture" className="btn btn-terra">See the work <Arrow /></Link>
            <Link to="/contact" className="tlink tlink-light">Start a project <Arrow s={15} /></Link>
          </div>
        </div>
        <div className="hero-figure">
          <div className="hero-bg" data-parallax>
            <SmartImage src={U("1493663284031-b7e3aefcae8e", 1500)} alt="A handcrafted chair in a sunlit studio interior" label="Form & Flavour Studio" />
          </div>
          <div className="hero-grain" aria-hidden="true"></div>
          <div className="hero-fig-cap">
            <span className="kicker-num">01 / 04</span>
            <span>Reading Chair, reupholstered — reclaimed leather</span>
          </div>
        </div>
        <div className="scroll-cue hero-scroll"><span className="line" /> Scroll</div>
      </section>

      {/* FOUR CRAFTS */}
      <section className="section wrap-wide">
        <div className="sec-head">
          <div>
            <Reveal as="span" className="eyebrow label">The four crafts</Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>One sensibility,<br /><span className="serif-italic">four disciplines.</span></Reveal>
          </div>
          <Reveal as="p" className="measure lead" style={{ fontSize: "1.05rem" }}>
            They look unrelated on paper. In practice they're the same instinct — to make something considered,
            tactile and a little bit beautiful — pointed at four different materials.
          </Reveal>
        </div>
        <div className="crafts-grid">
          {CRAFTS.map((c, i) => <ServiceCard key={c.to} craft={c} i={i} />)}
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="section-tight wrap-wide">
        <div className="sec-head">
          <Reveal as="h2" className="h2">Selected work</Reveal>
          <Reveal as={Link} to="/furniture" className="tlink">See the furniture portfolio <Arrow s={15} /></Reveal>
        </div>
        <Reveal className="strip">
          {[FURNITURE[0], CHOCOLATES[0], RECIPES[1], FURNITURE[2], CHOCOLATES[2], TOURS[1]].map((it, i) => (
            <div className="strip-item" key={i}>
              <SmartImage src={it.img} alt={it.nm} ratio="4 / 3" label={it.nm} />
              <div className="gal-cap">
                <span className="nm">{it.nm}</span>
                <span className="meta yr">{it.mat ? it.yr : it.col || it.loc || it.client}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* STORY TEASER */}
      <section className="story section">
        <div className="wrap-wide story-grid">
          <Reveal>
            <SmartImage src={U("1556911220-bff31c812dba", 1100)} alt="Hands working at a studio bench" ratio="5 / 4" label="In the studio" />
          </Reveal>
          <Reveal delay={120}>
            <span className="label" style={{ color: "var(--terra-soft)" }}>The studio</span>
            <h2 className="h2" style={{ color: "var(--cream)", margin: "18px 0 22px" }}>
              Begun at a kitchen table, between a sewing machine and a saucepan.
            </h2>
            <p className="lead">
              Form &amp; Flavour is the work of one maker who refused to choose between the things he loved.
              Furniture taught patience; chocolate taught precision; cooking taught generosity — and the tours
              are simply an excuse to share all three, designed for gentlemen who appreciate craftsmanship.
            </p>
            <Link to="/about" className="btn btn-ghost-light" style={{ marginTop: 30 }}>Read the story <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band section">
        <div className="wrap">
          <Reveal as="span" className="label" style={{ color: "color-mix(in srgb, var(--cream) 80%, transparent)" }}>Commissions open</Reveal>
          <Reveal as="h2" className="h1" style={{ margin: "20px auto 30px", maxWidth: "16ch" }}>
            Have something in mind? Let's make it by hand.
          </Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-ghost-light">Start a project <Arrow /></Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- FURNITURE ---------- */
export function Furniture() {
  usePageMeta(
    "Upholstered Furniture — Form & Flavour Studio",
    "Bespoke and reupholstered furniture by Form & Flavour Studio: wingbacks, settees and lounge chairs rebuilt by hand in considered fabrics."
  );
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">Portfolio — 01</Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>Upholstered Furniture</Reveal>
        <Reveal as="p" className="lead measure">
          Old frames, stripped back and rebuilt. New pieces, sprung and stuffed the slow way. Every chair here was
          finished by hand in the studio — chosen fabric, hand-cut, hand-tacked.
        </Reveal>
        <Reveal className="pagehead-meta">
          <div className="stat"><div className="k">40+</div><div className="l">Pieces a year</div></div>
          <div className="stat"><div className="k">8–12 wks</div><div className="l">Typical lead time</div></div>
          <div className="stat"><div className="k">Traditional</div><div className="l">Sprung &amp; stuffed</div></div>
        </Reveal>
      </header>
      <section className="section-tight wrap-wide">
        <p className="label" style={{ color: "var(--ink-soft)", marginBottom: 24 }}>Click any piece to view it larger</p>
        <GalleryGrid items={FURNITURE} variant="masonry" />
      </section>
      <Footer />
    </main>
  );
}

/* ---------- CHOCOLATES ---------- */
export function Chocolates() {
  usePageMeta(
    "Painted Chocolates — Form & Flavour Studio",
    "Hand-painted artisan chocolates by Form & Flavour Studio, finished like miniature paintings across seasonal collections."
  );
  const collections = ["All", "The Orchard Collection", "Autumn Editions", "Midnight Series"];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? CHOCOLATES : CHOCOLATES.filter((c) => c.col === active);
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">Portfolio — 02</Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>Painted Chocolates</Reveal>
        <Reveal as="p" className="lead measure">
          Each shell is hand-painted with coloured cocoa butter before it's filled — so every box arrives looking
          less like confectionery and more like a set of small, edible paintings.
        </Reveal>
      </header>
      <section className="section-tight wrap-wide">
        <Reveal className="collrow">
          {collections.map((c) => (
            <button key={c} className={`tag collchip ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </Reveal>
        <GalleryGrid key={active} items={shown} variant="even" />
      </section>
      <Footer />
    </main>
  );
}
