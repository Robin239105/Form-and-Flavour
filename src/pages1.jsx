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

function HeroSlideshow() {
  const [idx, setIdx] = React.useState(0);
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % CRAFTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-gallery-bgs">
      {CRAFTS.map((c, i) => (
        <div 
          key={c.to} 
          className={`hero-bg-layer ${i === idx ? "active" : ""}`}
        >
          <SmartImage src={c.img} alt={c.nm} />
        </div>
      ))}
      <div className="hero-gallery-overlay" />
    </div>
  );
}


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

      {/* HERO — minimalist gallery */}
      <section className="hero-gallery" aria-label="Introduction">
        <HeroSlideshow />
        
        <div className="hero-gallery-content">
          <div className="hero-gallery-brand">
            <span className="brand-logo">Form <span className="amp">&amp;</span> Flavour</span>
          </div>
          
          <div className="hero-gallery-footer">
            <p className="hero-gallery-tagline">
              One studio working across four crafts. Each made slowly, by hand, with the same eye.
            </p>
            <div className="scroll-cue hero-scroll" style={{ opacity: 1 }}><span className="line" /> Explore</div>
          </div>
        </div>
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

      {/* Expanded Content: Process */}
      <section className="section-tight wrap-wide">
        <div className="grid-2">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 24 }}>The Upholstery Process</h2>
            <p className="lead" style={{ marginBottom: 16 }}>
              We do not cut corners. A true piece of upholstered furniture is built from the inside out, 
              focusing on the frame, the springs, the stuffing, and finally, the cover.
            </p>
            <ul className="tour-incl">
              <li><strong>Frame Assessment:</strong> Every antique frame is stripped to the bare wood, glued, and reinforced.</li>
              <li><strong>Springing:</strong> Traditional copper cone springs, hand-lashed with eight-way ties for longevity.</li>
              <li><strong>Stuffing:</strong> Horsehair, coir, and wool layering, entirely avoiding synthetic foams where possible.</li>
              <li><strong>Finishing:</strong> Hand-stitched edges, precise pattern matching, and hand-tacked detailing.</li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <SmartImage src={U("1586023492125-27b2c045efd7")} alt="Upholstery tools and fabric" ratio="4 / 3" />
          </Reveal>
        </div>
      </section>

      {/* Expanded Content: Materials */}
      <section className="section-tight wrap-wide" style={{ background: "var(--cream-2)", padding: "clamp(48px, 7vw, 96px)" }}>
        <Reveal as="h2" className="h2" style={{ textAlign: "center", marginBottom: 48 }}>Materials Library</Reveal>
        <div className="grid-3">
          <Reveal className="svc-card">
            <h3 className="h3">Mohair Velvet</h3>
            <p style={{ marginTop: 12, color: "var(--ink-soft)" }}>Sourced from traditional mills, mohair provides an unmatched depth of color and incredible durability for high-traffic lounge chairs.</p>
          </Reveal>
          <Reveal className="svc-card" delay={100}>
            <h3 className="h3">Heavy Linen</h3>
            <p style={{ marginTop: 12, color: "var(--ink-soft)" }}>Washed Belgian linens that drape beautifully and soften over time. Perfect for relaxed settees and slipcovers.</p>
          </Reveal>
          <Reveal className="svc-card" delay={200}>
            <h3 className="h3">Vegetable Tanned Leather</h3>
            <p style={{ marginTop: 12, color: "var(--ink-soft)" }}>Thick, aromatic hides that patinate beautifully. We source from Italian and British tanneries committed to traditional pit tanning.</p>
          </Reveal>
        </div>
      </section>

      <section className="section wrap-wide">
        <div className="sec-head">
          <h2 className="h2">Selected Pieces</h2>
        </div>
        <p className="label" style={{ color: "var(--ink-soft)", marginBottom: 24 }}>Click any piece to view it larger</p>
        <GalleryGrid items={FURNITURE} variant="masonry" />
      </section>
      
      {/* Commission CTA */}
      <section className="cta-band section">
        <div className="wrap">
          <Reveal as="h2" className="h2" style={{ margin: "0 auto 28px", maxWidth: "20ch" }}>Commission a custom piece or request a reupholstery quote.</Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-ghost-light">Start a project <Arrow /></Reveal>
        </div>
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

      {/* Expanded Content: Painting & Flavour Profiles */}
      <section className="section-tight wrap-wide">
        <div className="grid-2">
          <Reveal delay={100}>
            <SmartImage src={U("1542843137-8791a6904d14")} alt="Painting chocolate moulds" ratio="4 / 3" />
          </Reveal>
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 24 }}>The Painting Process</h2>
            <p className="lead" style={{ marginBottom: 16 }}>
              Our chocolates are tempered and cast by hand in small batches. 
              Before the chocolate is poured, each mould is individually painted with naturally coloured cocoa butters.
            </p>
            <h3 className="h3" style={{ marginTop: 30, marginBottom: 16 }}>Signature Flavour Profiles</h3>
            <ul className="tour-incl">
              <li><strong>The Orchard Collection:</strong> Bright, acidic fruit notes like yuzu, green apple, and preserved quince.</li>
              <li><strong>Autumn Editions:</strong> Deep, warming flavours including smoked sea salt caramel, hazelnut praline, and burnt honey.</li>
              <li><strong>Midnight Series:</strong> Intense, dark profiles featuring single-origin 70% cacao, saffron, and aged rum ganache.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section wrap-wide">
        <div className="sec-head">
          <h2 className="h2">The Collections</h2>
        </div>
        <Reveal className="collrow">
          {collections.map((c) => (
            <button key={c} className={`tag collchip ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </Reveal>
        <GalleryGrid key={active} items={shown} variant="even" />
      </section>

      {/* Expanded Content: Corporate Gifting */}
      <section className="section-tight wrap-wide" style={{ background: "var(--cream-2)", padding: "clamp(48px, 7vw, 96px)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal as="h2" className="h2" style={{ marginBottom: 20 }}>Corporate &amp; Event Gifting</Reveal>
          <Reveal as="p" className="lead measure" style={{ margin: "0 auto 30px" }}>
            We provide bespoke boxes for private dinners, press events, and corporate gifting. 
            Custom colorways can be developed to match your brand identity, alongside tailored flavour profiles.
          </Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-terra">Enquire about gifting <Arrow /></Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
