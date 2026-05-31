/* ============================================================
   PAGES — Recipes · Tours · About · Contact
   ============================================================ */
import React from "react";
import { Link } from "react-router-dom";
import {
  Arrow,
  SmartImage,
  Reveal,
  Nav,
  Footer,
  ContactForm,
  usePageMeta,
  IconInstagram,
  IconPinterest,
  IconMail,
} from "./components.jsx";
import { RECIPES, TOURS } from "./data.js";
import portraitImg from "./assets/craftsman_portrait.png";

/* ---------- RECIPES ---------- */
export function Recipes() {
  usePageMeta(
    "Recipe Development — Form & Flavour Studio",
    "Recipe and food-product development by Form & Flavour Studio: menus, ranges and single dishes built from the brief up, then scaled."
  );
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">
          Service — 03
        </Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>
          Recipe Development
        </Reveal>
        <Reveal as="p" className="lead measure">
          Commissioned cookery for restaurants, grocers and makers. We take a brief — a flavour, a
          constraint, a gap on the shelf — and develop it into something repeatable, costed and
          genuinely good to eat.
        </Reveal>
      </header>

      <section
        className="section-tight wrap-wide"
        style={{ display: "grid", gap: "clamp(64px, 9vw, 130px)" }}
      >
        {RECIPES.map((r, i) => (
          <Reveal as="article" className="case" key={r.id}>
            <div className="case-media">
              <SmartImage src={r.img} alt={`${r.title} — ${r.client}`} label={r.title} />
            </div>
            <div className="case-body">
              <span className="kicker-num">
                {String(i + 1).padStart(2, "0")} — {r.year}
              </span>
              <h2 className="h2" style={{ margin: "14px 0 6px" }}>
                {r.title}
              </h2>
              <span className="label" style={{ color: "var(--cocoa)" }}>
                {r.client}
              </span>
              <div className="case-steps">
                <div className="case-step">
                  <span className="lbl">The brief</span>
                  <p className="txt">{r.brief}</p>
                </div>
                <div className="case-step">
                  <span className="lbl">Process</span>
                  <p className="txt">{r.process}</p>
                </div>
                <div className="case-step">
                  <span className="lbl">Outcome</span>
                  <p className="txt">
                    <strong>{r.outcome}</strong>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="cta-band section">
        <div className="wrap">
          <Reveal as="h2" className="h2" style={{ margin: "0 auto 28px", maxWidth: "18ch" }}>
            Have a brief that needs cooking into shape?
          </Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-ghost-light">
            Discuss a project <Arrow />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- TOURS ---------- */
export function Tours() {
  usePageMeta(
    "Food Tours & Pub Crawls — Form & Flavour Studio",
    "Guided food tours and curated pub crawls across London by Form & Flavour Studio — historic pubs, market tastings and bespoke private tables."
  );
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">
          Service — 04
        </Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>
          Food Tours &amp; Pub Crawls
        </Reveal>
        <Reveal as="p" className="lead measure">
          The city, tasted slowly and on foot. Small groups, good pubs, better stories — each route
          is researched and walked by us before anyone else sets out on it.
        </Reveal>
      </header>

      <section className="section-tight wrap-wide">
        <div className="tour-grid">
          {TOURS.map((t, i) => (
            <Reveal as="article" className="tour-card" key={t.id} delay={(i % 2) * 90}>
              <SmartImage src={t.img} alt={`${t.nm} — ${t.loc}`} label={t.nm} />
              <div className="tour-body">
                <div className="tour-head">
                  <h2 className="h3">{t.nm}</h2>
                  <span className="tag">{t.dur.split(" · ")[1] || "Tour"}</span>
                </div>
                <div className="tour-loc">
                  {t.loc} · {t.dur.split(" · ")[0]}
                </div>
                <ul className="tour-incl">
                  {t.incl.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <div className="tour-foot">
                  <span className="tour-price">{t.price}</span>
                  <Link to="/contact" className="tlink">
                    Enquire <Arrow s={15} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expanded Content: Tours FAQ */}
      <section className="section-tight wrap-wide">
        <Reveal as="h2" className="h2" style={{ marginBottom: 30 }}>
          Frequently Asked Questions
        </Reveal>
        <div className="grid-2">
          <Reveal>
            <h3 className="h3">How large are the tour groups?</h3>
            <p className="lead" style={{ marginBottom: 24, fontSize: "1rem" }}>
              We keep public tours strictly capped at 8 people to ensure everyone can hear the
              stories, ask questions, and comfortably fit into small historic pubs or market stalls.
            </p>
            <h3 className="h3">Do you cater to dietary requirements?</h3>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Yes. With 48 hours notice, we can accommodate most dietary requirements (including
              vegetarian, vegan, and gluten-free) across all our food and drink stops.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="h3">What happens if it rains?</h3>
            <p className="lead" style={{ marginBottom: 24, fontSize: "1rem" }}>
              The tours run rain or shine. In true London fashion, we recommend an umbrella and good
              walking shoes. We adjust the route slightly to maximize time indoors when the weather
              turns.
            </p>
            <h3 className="h3">Can I book a private tour for a corporate event?</h3>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Absolutely. Private bookings can be tailored for corporate team-building or private
              celebrations. Contact us directly to arrange a bespoke route.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="story section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal as="span" className="label" style={{ color: "var(--terra-soft)" }}>
            Booking enquiries
          </Reveal>
          <Reveal
            as="h2"
            className="h2"
            style={{ color: "var(--cream)", margin: "18px auto 26px", maxWidth: "20ch" }}
          >
            Gathering a group, or planning a private table?
          </Reveal>
          <Reveal
            as="p"
            className="lead"
            style={{
              color: "color-mix(in srgb, var(--cream) 84%, transparent)",
              margin: "0 auto 30px",
              maxWidth: "52ch",
            }}
          >
            Tell us the date, the headcount and the appetite. We'll come back with a route and a
            quote.
          </Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-terra">
            Make an enquiry <Arrow />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- ABOUT ---------- */
const TIES = [
  {
    n: "01",
    h: "Made by hand",
    p: "Every output passes through one pair of hands at the point that matters most — the tack, the brushstroke, the seasoning, the route.",
  },
  {
    n: "02",
    h: "Material-first",
    p: "Whether it's mohair, cocoa butter or celeriac, the work starts by listening to what the material wants to do.",
  },
  {
    n: "03",
    h: "Quietly considered",
    p: "Nothing here shouts. The aim is objects and experiences that reveal their care slowly, the longer you live with them.",
  },
];
const PROCESS = [
  {
    n: "01",
    h: "Conversation",
    p: "Every commission starts with a long talk — about the room, the palate, the occasion, the budget. No brief is too loose to begin with.",
  },
  {
    n: "02",
    h: "Sampling",
    p: "Fabric swatches, painted shells, test batches, trial routes. You see and taste the direction before anything is committed.",
  },
  {
    n: "03",
    h: "Making",
    p: "The slow part, done properly. You're welcome to visit the bench while it happens.",
  },
  {
    n: "04",
    h: "Handover",
    p: "A finished piece, a costed range, a booked table — delivered with the notes you'd need to live with it well.",
  },
];

export function About() {
  usePageMeta(
    "About — Form & Flavour Studio",
    "The story behind Form & Flavour Studio: one maker working across furniture, chocolate, recipe development and food tours, and the thread that ties them together."
  );
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <div className="about-hero">
          <div>
            <Reveal as="span" className="eyebrow label">
              About the studio
            </Reveal>
            <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>
              A maker who refused
              <br />
              to <span className="serif-italic">pick a lane.</span>
            </Reveal>
            <Reveal as="p" className="lead measure" style={{ marginTop: 22 }}>
              Form &amp; Flavour Studio is run by Edward Marlowe — upholsterer, chocolatier, recipe
              developer and reluctant tour guide — from a converted workshop in east London,
              crafting bespoke furniture, custom chocolates, and culinary experiences designed with
              the modern gentleman in mind.
            </Reveal>
          </div>
          <Reveal className="about-portrait" delay={120}>
            <SmartImage
              src={portraitImg}
              alt="Portrait of studio founder Edward Marlowe"
              label="Edward Marlowe"
            />
          </Reveal>
        </div>
      </header>

      <section className="section-tight wrap-wide">
        <div className="grid-2">
          <Reveal as="h2" className="h2">
            Four crafts, one pair of hands.
          </Reveal>
          <Reveal delay={100}>
            <p style={{ marginBottom: 18, color: "var(--ink-soft)" }}>
              The studio began the way a lot of good things do — accidentally. A reupholstered
              lounge chair led to a fellow gentleman's commission; a batch of painted chocolates for
              a private club led to a wholesale order; a tasting menu led to restaurants asking for
              help with their offerings.
            </p>
            <p style={{ color: "var(--ink-soft)" }}>
              Rather than narrow down, Edward built a practice broad enough to hold all of it — on
              the belief that the instincts behind a well-made chair and a well-balanced plate are,
              in the end, the same instincts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight wrap-wide">
        <Reveal as="h2" className="h2" style={{ marginBottom: 40 }}>
          What ties it together
        </Reveal>
        <div className="tie-grid">
          {TIES.map((t, i) => (
            <Reveal className="tie" key={t.n} delay={i * 90}>
              <div className="n">{t.n}</div>
              <h3 className="h3">{t.h}</h3>
              <p>{t.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-tight wrap-wide">
        <Reveal as="h2" className="h2" style={{ marginBottom: 30 }}>
          How a commission runs
        </Reveal>
        <div className="process-list">
          {PROCESS.map((p) => (
            <Reveal className="process-row" key={p.n}>
              <div className="num">{p.n}</div>
              <div>
                <h3 className="h3">{p.h}</h3>
                <p>{p.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band section">
        <div className="wrap">
          <Reveal as="h2" className="h1" style={{ margin: "0 auto 30px", maxWidth: "14ch" }}>
            Work with the studio.
          </Reveal>
          <Reveal as={Link} to="/contact" className="btn btn-ghost-light">
            Get in touch <Arrow />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  usePageMeta(
    "Contact — Form & Flavour Studio",
    "Get in touch with Form & Flavour Studio for furniture commissions, chocolate orders, recipe development and tour bookings."
  );
  return (
    <main>
      <Nav />
      <header className="pagehead wrap-wide">
        <Reveal as="span" className="eyebrow label">
          Contact
        </Reveal>
        <Reveal as="h1" className="h1" style={{ marginTop: 18 }}>
          Tell us what
          <br />
          you'd like to make.
        </Reveal>
      </header>

      <section className="section-tight wrap-wide">
        <div className="contact-grid">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="contact-aside" delay={120}>
            <p className="lead" style={{ color: "var(--ink-soft)" }}>
              Whether it's a single chair, a wholesale chocolate order, a menu to develop or a table
              to book — start here. We read every message ourselves.
            </p>
            <div className="social" aria-label="Social links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
              >
                <IconPinterest />
              </a>
              <a href="mailto:hello@formandflavour.studio" aria-label="Email">
                <IconMail />
              </a>
            </div>
            <div className="contact-detail">
              <span className="k">Email</span>
              <a
                className="tlink"
                href="mailto:hello@formandflavour.studio"
                style={{ width: "fit-content" }}
              >
                hello@formandflavour.studio
              </a>
            </div>
            <div className="contact-detail">
              <span className="k">Studio</span>
              <span>East London · Visits by appointment</span>
            </div>
            <div className="contact-detail">
              <span className="k">Reply time</span>
              <span>Within two working days</span>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
