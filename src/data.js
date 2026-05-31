/* ============================================================
   DATA — imagery + content for Form & Flavour Studio
   Unsplash hotlinks with category fallbacks handled by SmartImage
   ============================================================ */

export const U = (id, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ---- Furniture portfolio ---- */
export const FURNITURE = [
  {
    id: "f1",
    img: U("1555041469-a586c61ea9bc"),
    nm: "The Marlowe Wingback",
    mat: "Mohair velvet · walnut",
    yr: "2025",
    h: 1.28,
  },
  {
    id: "f2",
    img: U("1538688525198-9b88f6f53126"),
    nm: "Plum Lounge No. 4",
    mat: "Cotton bouclé · brass",
    yr: "2025",
    h: 1.0,
  },
  {
    id: "f3",
    img: U("1493663284031-b7e3aefcae8e"),
    nm: "Reading Chair, Reupholstered",
    mat: "Reclaimed leather",
    yr: "2024",
    h: 1.34,
  },
  {
    id: "f4",
    img: U("1567538096630-e0c55bd6374c"),
    nm: "The Bone Settee",
    mat: "Linen · oak frame",
    yr: "2024",
    h: 0.92,
  },
  {
    id: "f5",
    img: U("1586023492125-27b2c045efd7"),
    nm: "Aubergine Slipper Pair",
    mat: "Silk-wool blend",
    yr: "2024",
    h: 1.15,
  },
  {
    id: "f6",
    img: U("1503602642458-232111445657"),
    nm: "Cocoa Club Chair",
    mat: "Suede · tan piping",
    yr: "2023",
    h: 1.3,
  },
  {
    id: "f7",
    img: U("1416339306562-f3d12fefd36f"),
    nm: "The Long Banquette",
    mat: "Herringbone wool",
    yr: "2023",
    h: 0.78,
  },
  {
    id: "f8",
    img: U("1524758631624-e2822e304c36"),
    nm: "Hallway Ottoman",
    mat: "Hand-tufted velvet",
    yr: "2023",
    h: 1.05,
  },
  {
    id: "f9",
    img: U("1550581190-9c1c48d21d6c"),
    nm: "Terracotta Armchair",
    mat: "Brushed cotton",
    yr: "2022",
    h: 1.2,
  },
];

/* ---- Chocolate collections ---- */
export const CHOCOLATES = [
  {
    id: "c1",
    img: U("1511381939415-e44015466834"),
    nm: "Marbled Aubergine",
    col: "The Orchard Collection",
  },
  {
    id: "c2",
    img: U("1481391319762-47dff72954d9"),
    nm: "Gilded Terracotta",
    col: "The Orchard Collection",
  },
  { id: "c3", img: U("1606312619070-d48b4c652a52"), nm: "Speckled Quince", col: "Autumn Editions" },
  { id: "c4", img: U("1549007994-cb92caebd54b"), nm: "Bronze & Bone", col: "Autumn Editions" },
  {
    id: "c5",
    img: U("1542843137-8791a6904d14"),
    nm: "Painted Plum",
    col: "The Orchard Collection",
  },
  {
    id: "c6",
    img: U("1623660053975-cf75a8be0908"),
    nm: "Cocoa Constellation",
    col: "Midnight Series",
  },
  {
    id: "c7",
    img: U("1481391319762-47dff72954d9", 900),
    nm: "Saffron Drift",
    col: "Midnight Series",
  },
  { id: "c8", img: U("1610450949065-1f2841536c88"), nm: "Burnt Honey", col: "Autumn Editions" },
];

/* ---- Recipe development case studies ---- */
export const RECIPES = [
  {
    id: "r1",
    img: U("1504674900247-0877df9cc836"),
    title: "A Pantry Line for Ma300",
    client: "Ma300 · Heritage Grocer",
    year: "2025",
    brief:
      "Develop a six-SKU range of shelf-stable sauces that taste hand-finished, scale to 5,000 units a batch, and hold an 18-month life without preservatives readable as 'chemical'.",
    process:
      "Eleven weeks of iterative cookery — starting in a domestic kitchen, then translating each formula to a co-packer's kettle. Acidity, viscosity and roast depth were tuned against blind panels of the client's own customers.",
    outcome:
      "Six sauces launched nationally. The harissa and the black-garlic ketchup now account for a third of the grocer's private-label condiment revenue.",
  },
  {
    id: "r2",
    img: U("1547592180-85f173990554"),
    title: "Winter Menu, Built From One Root",
    client: "The Coppice · Restaurant",
    year: "2024",
    brief:
      "A nine-course tasting menu themed entirely around celeriac, with no course repeating a technique. Every plate had to feel inevitable, not gimmicky.",
    process:
      "We mapped the vegetable across raw, fermented, charred, pressed and confited states, then reverse-engineered courses to chart a single arc of flavour from bright to deep.",
    outcome:
      "The menu ran two seasons. Course four — celeriac 'oyster' in seaweed butter — became the room's most-photographed dish.",
  },
  {
    id: "r3",
    img: U("1490645935967-10de6ba17061"),
    title: "A Chocolate Bar That Tastes Like Place",
    client: "Form & Flavour · In-house",
    year: "2024",
    brief:
      "Translate the studio's painted-chocolate language into a single-origin bar that could be produced at small wholesale scale without losing its hand-made character.",
    process:
      "Sourcing trips, three conche profiles and a tempering study. The wrapper artwork was developed in parallel so flavour and object arrived as one idea.",
    outcome:
      "A 70% Ucayali bar, sold through twelve independent grocers and the studio's own shop counter.",
  },
];

/* ---- Food tours & pub crawls ---- */
export const TOURS = [
  {
    id: "t1",
    img: U("1514933651103-005eec06c04b"),
    nm: "The Brown Sign Crawl",
    loc: "Spitalfields → Shoreditch",
    dur: "3.5 hrs · evenings",
    incl: ["Five historic pubs", "A pint paired at each stop", "Stories of the streets between"],
    price: "From £58 pp",
  },
  {
    id: "t2",
    img: U("1559526324-4b87b5e36e44"),
    nm: "Market to Table",
    loc: "Borough & Bermondsey",
    dur: "4 hrs · daytime",
    incl: ["Six tasting stops", "Producer introductions", "A sit-down small plate to finish"],
    price: "From £74 pp",
  },
  {
    id: "t3",
    img: U("1538488881038-e252a119ace7"),
    nm: "The Long Sunday Lunch",
    loc: "Hampstead & the Heath",
    dur: "5 hrs · Sundays",
    incl: ["A heath walk between courses", "Three pubs, three plates", "A digestif to close"],
    price: "From £92 pp",
  },
  {
    id: "t4",
    img: U("1572116469696-31de0f17cc34"),
    nm: "Private Studio Table",
    loc: "By arrangement",
    dur: "Bespoke",
    incl: ["A menu built to your brief", "Wine or beer pairings", "Up to ten guests"],
    price: "On enquiry",
  },
];

/* ---- The four crafts ---- */
export const CRAFTS = [
  {
    n: "01",
    to: "/furniture",
    nm: "Upholstered Furniture",
    sub: "Bespoke seating, reimagined and rebuilt by hand.",
    img: U("1538688525198-9b88f6f53126", 900),
  },
  {
    n: "02",
    to: "/chocolates",
    nm: "Painted Chocolates",
    sub: "Edible miniatures, finished like small paintings.",
    img: U("1511381939415-e44015466834", 900),
  },
  {
    n: "03",
    to: "/recipes",
    nm: "Recipe Development",
    sub: "Dishes and product lines, built from the idea up.",
    img: U("1490645935967-10de6ba17061", 900),
  },
  {
    n: "04",
    to: "/tours",
    nm: "Food Tours & Pub Crawls",
    sub: "The city, tasted slowly and on foot.",
    img: U("1514933651103-005eec06c04b", 900),
  },
];

/* ---- Journal Posts ---- */
export const JOURNAL_POSTS = [
  {
    id: "sourcing-mohair",
    title: "Sourcing Mohair in Yorkshire",
    date: "Oct 2025",
    img: U("1586023492125-27b2c045efd7"),
    excerpt:
      "A trip to one of the last remaining traditional mohair velvet mills in the north of England, exploring their century-old looms.",
  },
  {
    id: "painted-shell",
    title: "The Anatomy of a Painted Shell",
    date: "Aug 2025",
    img: U("1542843137-8791a6904d14"),
    excerpt:
      "How we achieve the vibrant, glossy finish on our chocolate bonbons using colored cocoa butter and precise temperature control.",
  },
  {
    id: "rebuilding-reading-chair",
    title: "Rebuilding the Reading Chair",
    date: "Jun 2025",
    img: U("1493663284031-b7e3aefcae8e"),
    excerpt:
      "A step-by-step look at stripping down a mid-century frame and rebuilding it using traditional horsehair and coir.",
  },
];

/* ---- Shop Items ---- */
export const SHOP_ITEMS = [
  {
    id: "box-12",
    title: "Signature Box — 12 Pieces",
    price: 48,
    col: "Artisan Chocolates",
    img: U("1511381939415-e44015466834", 900),
  },
  {
    id: "box-24",
    title: "Signature Box — 24 Pieces",
    price: 85,
    col: "Artisan Chocolates",
    img: U("1620023602161-0b534e3fc45a", 900),
  },
  {
    id: "bar-dark",
    title: "70% Single Origin Bar",
    price: 12,
    col: "Madagascar Origin",
    img: U("1542843137-8791a6904d14", 900),
  },
  {
    id: "care-kit",
    title: "Leather Care Kit",
    price: 35,
    col: "Furniture Accessories",
    img: U("1538688525198-9b88f6f53126", 900),
  },
  {
    id: "linen-cushion",
    title: "Bespoke Linen Cushion Cover",
    price: 65,
    col: "Studio Textiles",
    img: U("1586023492125-27b2c045efd7", 900),
  },
  {
    id: "studio-apron",
    title: "Studio Apron — Heavy Canvas",
    price: 55,
    col: "Studio Wear",
    img: U("1556911220-bff31c812dba", 900),
  },
];
