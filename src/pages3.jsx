/* ============================================================
   PAGES — Journal · Shop · Commissions
   ============================================================ */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Arrow, SmartImage, Reveal, Nav, Footer, usePageMeta, GalleryGrid } from "./components.jsx";
import { U, CHOCOLATES, FURNITURE, JOURNAL_POSTS, SHOP_ITEMS } from "./data.js";
import { CartContext } from "./App.jsx";

/* ---------- JOURNAL ---------- */
export function Journal() {
  usePageMeta("Journal — Form & Flavour Studio", "Behind the scenes, material sourcing, and stories from the studio.");

  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">Studio Notes</Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>The Journal</Reveal>
        <Reveal as="p" className="lead measure">Stories from the bench, the kitchen, and the road. A behind-the-scenes look at how things are made.</Reveal>
      </header>

      <section className="section-tight wrap-wide">
        <div className="grid-2">
          {JOURNAL_POSTS.map((p, i) => (
            <Reveal as="article" className="tour-card" key={p.id} delay={i * 100} style={{ paddingBottom: 24 }}>
              <SmartImage src={p.img} alt={p.title} ratio="16 / 9" />
              <div style={{ padding: "20px 20px 0" }}>
                <span className="label" style={{ color: "var(--ink-soft)", marginBottom: 12, display: "block" }}>{p.date}</span>
                <h2 className="h3" style={{ marginBottom: 16 }}>{p.title}</h2>
                <p>{p.excerpt}</p>
                <Link to={`/journal/${p.id}`} className="tlink" style={{ marginTop: 20 }}>Read full story <Arrow s={15} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- JOURNAL POST (Single Page) ---------- */
export function JournalPost() {
  const { id } = useParams();
  const post = JOURNAL_POSTS.find(p => p.id === id);

  usePageMeta(
    post ? `${post.title} — Journal` : "Post Not Found",
    post ? post.excerpt : "Journal post"
  );

  if (!post) {
    return (
      <main>
        <Nav />
        <section className="section wrap" style={{ textAlign: "center", paddingTop: "20vh" }}>
          <h1 className="h2">Post not found</h1>
          <Link to="/journal" className="btn btn-terra" style={{ marginTop: 20 }}>Return to Journal</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Nav />
      <article className="section-tight wrap">
        <Reveal as="span" className="label" style={{ color: "var(--ink-soft)" }}>{post.date}</Reveal>
        <Reveal as="h1" className="h1" style={{ margin: "20px 0 30px" }}>{post.title}</Reveal>
        <Reveal>
          <SmartImage src={post.img} alt={post.title} ratio="16 / 9" style={{ marginBottom: 40 }} />
        </Reveal>
        <Reveal className="lead measure">
          <p>{post.excerpt}</p>
          <p style={{ marginTop: 20 }}>
            This is a full article view for <strong>{post.title}</strong>. 
            The studio's approach to craftsmanship means looking closely at every single detail. Whether it's weaving fabric, tempering chocolate, or testing recipes, nothing happens quickly.
          </p>
          <p style={{ marginTop: 20 }}>
            We document these processes because we believe that understanding how something is made significantly increases the joy of living with it. 
          </p>
        </Reveal>
        
        <Reveal style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid var(--cream-3)" }}>
          <Link to="/journal" className="tlink"><Arrow s={15} style={{ transform: "rotate(180deg)", marginRight: 8 }} /> Back to Journal</Link>
        </Reveal>
      </article>
      <Footer />
    </main>
  );
}

/* ---------- SHOP ---------- */
export function Shop() {
  usePageMeta("Shop — Form & Flavour Studio", "Purchase select painted chocolates and small goods directly from the studio.");
  const { addToCart } = React.useContext(CartContext);

  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">Store</Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>The Studio Store</Reveal>
        <Reveal as="p" className="lead measure">
          Small batches of our signature painted chocolates, hand-picked textiles, and leather care accessories. 
          Every item is crafted or sourced with the same attention to detail as our custom furniture.
        </Reveal>
      </header>

      {/* Product Grid Section */}
      <section className="section-tight wrap-wide">
        <div className="grid-3" style={{ gap: "clamp(24px, 4vw, 48px)" }}>
          {SHOP_ITEMS.map((item, i) => (
            <Reveal as="div" className="svc-card" key={item.id} delay={i * 60} style={{ padding: "20px" }}>
              <div className="svc-media" style={{ borderRadius: "10px", overflow: "hidden" }}>
                <SmartImage src={item.img} alt={item.title} ratio="1 / 1" />
              </div>
              <div className="svc-body" style={{ display: "flex", flexDirection: "column", flex: 1, paddingTop: 16 }}>
                <span className="label" style={{ color: "var(--terra)", fontSize: "0.7rem", marginBottom: 8, display: "block" }}>{item.col}</span>
                <h3 className="h3" style={{ fontSize: "1.22rem", marginBottom: 12, minHeight: "2.4em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{item.title}</h3>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: 700, fontFamily: "var(--serif)" }}>£{item.price}</span>
                  <button className="btn btn-terra" style={{ padding: "10px 20px", fontSize: "0.72rem" }} onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-tight wrap-wide" style={{ background: "var(--cream-2)", borderRadius: "18px", marginBlock: "40px", padding: "60px var(--gutter)" }}>
        <div className="sec-head" style={{ marginBottom: 40 }}>
          <div>
            <Reveal as="span" className="eyebrow label">Studio Standards</Reveal>
            <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>Considered down to<br /><span className="serif-italic">the final thread.</span></Reveal>
          </div>
          <Reveal as="p" className="measure lead" style={{ fontSize: "1.05rem" }}>
            We ship once a week on Tuesdays to ensure all chocolate orders are freshly cast, and all textiles are pressed and packaged to studio standards.
          </Reveal>
        </div>

        <div className="grid-3" style={{ gap: "clamp(24px, 3vw, 40px)" }}>
          <Reveal className="svc-card" style={{ background: "var(--cream)", border: "1px solid var(--cream-3)" }}>
            <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16 / 10", marginBottom: 20 }}>
              <SmartImage src={U("1542843137-8791a6904d14", 600)} alt="Artisan chocolate production" />
            </div>
            <h3 className="h3" style={{ fontSize: "1.2rem", marginBottom: 10 }}>Weekly Small Batches</h3>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>Our chocolates are tempered, cast, and hand-painted in tiny quantities. We use fresh dairy and premium single-origin cacao, resulting in a short but extraordinary shelf life.</p>
          </Reveal>

          <Reveal className="svc-card" style={{ background: "var(--cream)", border: "1px solid var(--cream-3)" }} delay={100}>
            <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16 / 10", marginBottom: 20 }}>
              <SmartImage src={U("1586023492125-27b2c045efd7", 600)} alt="Studio textiles and canvas" />
            </div>
            <h3 className="h3" style={{ fontSize: "1.2rem", marginBottom: 10 }}>Bespoke Materials</h3>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>From our Irish linens to our heavy cotton duck canvas, every textile piece is cut from remainder bolts of our furniture commissions, minimizing waste while sharing premium materials.</p>
          </Reveal>

          <Reveal className="svc-card" style={{ background: "var(--cream)", border: "1px solid var(--cream-3)" }} delay={200}>
            <div style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "16 / 10", marginBottom: 20 }}>
              <SmartImage src={U("1513635269975-59663e0ca1ad", 600)} alt="Insured delivery courier" />
            </div>
            <h3 className="h3" style={{ fontSize: "1.2rem", marginBottom: 10 }}>Insured & Tracked Courier</h3>
            <p style={{ color: "var(--ink-soft)", fontSize: "0.95rem" }}>To prevent melting or damage, we ship all parcels in temperature-controlled, shock-absorbent packaging via overnight tracked courier. Free UK shipping on orders over £150.</p>
          </Reveal>
        </div>
      </section>

      {/* Commissions Promotion Section */}
      <section className="cta-band section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal as="h2" className="h2" style={{ marginBottom: 20 }}>Looking for custom furniture?</Reveal>
          <Reveal as={Link} to="/commissions" className="btn btn-terra">View Commissions Guide <Arrow /></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- COMMISSIONS ---------- */
export function Commissions() {
  usePageMeta("Bespoke Commissions — Form & Flavour Studio", "Learn how to commission bespoke furniture from Form & Flavour Studio.");
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">Service Guide</Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>Bespoke Commissions</Reveal>
        <Reveal as="p" className="lead measure">
          A guide to commissioning bespoke or reupholstered furniture. We work closely with private clients and interior designers to build pieces meant to last a lifetime.
        </Reveal>
      </header>

      <section className="section-tight wrap-wide">
        <div className="grid-2">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 24 }}>The Timeline</h2>
            <p className="lead" style={{ marginBottom: 24, fontSize: "1rem" }}>
              Our bespoke furniture commissions typically require 8-12 weeks from the initial consultation to final delivery, depending on the complexity of the piece and the availability of specific fabrics.
            </p>
            <h3 className="h3" style={{ marginTop: 32, marginBottom: 16 }}>Pricing Guidelines</h3>
            <ul className="tour-incl">
              <li><strong>Armchairs & Lounge Chairs:</strong> Starting from £1,800 + fabric</li>
              <li><strong>Sofas & Settees:</strong> Starting from £3,200 + fabric</li>
              <li><strong>Ottomans & Footstools:</strong> Starting from £650 + fabric</li>
              <li><strong>Reupholstery (Your Frame):</strong> Priced upon inspection of the piece</li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ background: "var(--cream-2)", padding: "clamp(32px, 5vw, 64px)", borderRadius: 14 }}>
              <h2 className="h2" style={{ marginBottom: 20 }}>Submit a Brief</h2>
              <p style={{ marginBottom: 30 }}>If you have a project in mind, please send us details including dimensions, timeline, and any inspiration imagery.</p>
              <Link to="/contact" className="btn btn-terra">Contact the Studio <Arrow /></Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
