import { categories, products, articles } from "./catalog.js?v=3";

const main = document.querySelector("#main");
const panel = document.querySelector("#panel");
const icons = {
  home: '<path d="M3 10 12 3l9 7v10H15v-7H9v7H3z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  right: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  up: '<path d="M6 18 18 6M7 6h11v11"/>',
  left: '<path d="m14 5-7 7 7 7"/>',
  next: '<path d="m9 5 7 7-7 7"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  close: '<path d="m5 5 14 14M19 5 5 19"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  sliders:
    '<path d="M3 7h9m4 0h5M3 17h3m4 0h11"/><circle cx="14" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
  youtube:
    '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
  sound: '<path d="M2 10v4m4-8v12m4-15v18m4-15v12m4-9v6m4-5v4"/>',
};
const icon = (name, size = 20) =>
  '<svg aria-hidden="true" width="' +
  size +
  '" height="' +
  size +
  '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
  icons[name] +
  "</svg>";
const logo =
  '<a class="logo" href="#/" aria-label="Ignite home"><img src="assets/ignite.svg" width="36" height="36" alt=""><span>IGNITE</span></a>';
const money = (n) => "₹" + n.toLocaleString("en-IN");
const getProduct = (id) => products.find((p) => p.id === id);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const photo = (key, alt, extra = "") =>
  '<img src="assets/' + key + '.webp" alt="' + esc(alt) + '" ' + extra + ">";
const catLink = (id) => "#/shop/" + id;
const eyebrow = (text) =>
  '<div class="eyebrow"><span class="signal" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>' +
  text +
  "</div>";
const buttonLink = (href, label, style = "primary", arrow = "right") =>
  '<a class="btn ' +
  style +
  '" href="' +
  href +
  '">' +
  label +
  icon(arrow, 17) +
  "</a>";
const loadLocal = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem("ignite-" + key)) ?? fallback;
  } catch {
    return fallback;
  }
};
function saveLocal(key, value) {
  try {
    localStorage.setItem("ignite-" + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
const savedCart = loadLocal("bag", {});
let cart = Object.fromEntries(
  products
    .filter((p) => Number.isInteger(savedCart?.[p.id]) && savedCart[p.id] > 0)
    .map((p) => [p.id, Math.min(99, savedCart[p.id])]),
);
let slide = 0;
let noticeTimer;
function toast(message) {
  const el = document.querySelector("#notice");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => el.classList.remove("show"), 2300);
}
function bagCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}
function bagTotal() {
  return products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
}
function phoneNavigation() {
  const path = location.hash.slice(2).split(/[/?]/)[0];
  const homeCurrent = !path ? ' aria-current="page"' : "";
  const catalogCurrent = ["shop", "product"].includes(path)
    ? ' aria-current="location"'
    : "";
  const count = bagCount();
  return `<nav class="phone-nav" aria-label="Mobile shopping">
    <a href="#/"${homeCurrent}>${icon("home")}Home</a>
    <a href="#/shop"${catalogCurrent}>${icon("grid")}Catalog</a>
    <button data-act="search" aria-haspopup="dialog">${icon("search")}Search</button>
    <button data-act="bag" aria-haspopup="dialog" aria-label="Open bag, ${count} items">
      <span class="phone-bag-icon">${icon("bag")}${count ? `<b>${count}</b>` : ""}</span>Bag
    </button>
  </nav>`;
}
function header() {
  document.querySelector("#header").innerHTML =
    '<div class="container navbar">' +
    logo +
    '<nav aria-label="Primary"><a href="#/shop">Shop all</a><button data-act="collections" aria-haspopup="dialog">Collections ' +
    icon("down", 13) +
    '</button><a href="#/journal">Field notes</a><a href="#/about">About</a></nav><div class="actions"><button class="iconbtn" data-act="search" aria-label="Search products">' +
    icon("search") +
    '</button><span class="head-sep"></span><button class="bag-button" data-act="bag" aria-label="Open shopping bag, ' +
    bagCount() +
    ' items">' +
    icon("bag") +
    '<span class="bag-label">Bag</span><span class="count">' +
    bagCount() +
    '</span></button><button class="iconbtn mobile-menu" data-act="menu" aria-label="Open navigation">' +
    icon("menu") +
    "<span>Menu</span></button></div></div>" +
    phoneNavigation();
}
function footer() {
  document.querySelector("#footer").innerHTML =
    '<div class="container"><div class="footer-grid"><div>' +
    logo +
    '<p>Speakers and components for<br>people who build their own sound.</p><div class="socials">' +
    ["instagram", "youtube"]
      .map(
        (s) =>
          '<button data-act="social" data-id="' +
          s +
          '" aria-label="Ignite on ' +
          s +
          '">' +
          icon(s, 18) +
          "</button>",
      )
      .join("") +
    "</div></div><div><h3>Shop</h3>" +
    categories
      .map((c) => '<a href="' + catLink(c.id) + '">' + c.name + "</a>")
      .join("") +
    '</div><div><h3>Ignite</h3><a href="#/about">About Ignite</a><a href="#/journal">Field notes</a><button data-act="help">Customer care</button></div><div><h3>Shop updates</h3><p>Get collection news and build notes.</p><form id="newsletter"><label class="sr" for="signup">Email address</label><input id="signup" type="email" placeholder="Your email address" required><button aria-label="Join the preview list">' +
    icon("right") +
    '</button></form><small>Preview sign-ups stay on this device.</small></div></div><div class="footbase"><span>© ' +
    new Date().getFullYear() +
    " Ignite Audio</span><span>INDIA &nbsp; / &nbsp; INR ₹</span></div></div>";
}
const slides = [
  {
    title: "Sound by",
    accent: "design.",
    tag: "Independent audio supply",
    desc: "Loudspeakers, precision drivers, and crossover parts for people who build their own sound.",
    img: "hero",
    alt: "Close-up of a black woofer cone with copper rim lighting",
    action: "#/shop",
    button: "Shop the catalog",
    model: "FLUX W8",
    caption: "Midbass driver",
    id: "flux-w8",
  },
  {
    title: "Small room.",
    accent: "Big sound.",
    tag: "The loudspeaker collection",
    desc: "Meet the Axis monitors. Warm walnut, a compact cabinet, and a place on your listening shelf.",
    img: "monitor",
    alt: "Walnut Axis bookshelf loudspeaker",
    action: catLink("speakers"),
    button: "Shop loudspeakers",
    model: "AXIS M5",
    caption: "Bookshelf loudspeaker",
    id: "axis-m5",
  },
  {
    title: "Inside the",
    accent: "signal.",
    tag: "The component collection",
    desc: "Explore the coils and crossover networks that bring the pieces of a loudspeaker together.",
    img: "crossover",
    alt: "Copper coils and capacitors on a crossover network",
    action: catLink("components"),
    button: "Shop components",
    model: "PHASE X2",
    caption: "Two-way crossover",
    id: "phase-x2",
  },
];
function hero() {
  const s = slides[slide];
  return (
    '<div class="hero-image hero-image-' +
    slide +
    '">' +
    photo(s.img, s.alt, 'fetchpriority="high"') +
    '</div><div class="hero-shade"></div><div class="hero-content container"><div class="hero-copy">' +
    eyebrow(s.tag) +
    "<h1>" +
    s.title +
    "<br><em>" +
    s.accent +
    "</em></h1><p>" +
    s.desc +
    '</p><div class="hero-links">' +
    buttonLink(s.action, s.button) +
    buttonLink("#/journal/first-build", "Build guide", "secondary", "up") +
    '</div></div><div class="hero-foot"><div class="slide-nav"><span class="mono"><b>0' +
    (slide + 1) +
    '</b> / 03</span><div class="bars">' +
    slides
      .map(
        (_, i) =>
          '<button aria-label="Show feature ' +
          (i + 1) +
          '" aria-pressed="' +
          (slide === i) +
          '" class="' +
          (slide === i ? "active" : "") +
          '" data-act="slide" data-id="' +
          i +
          '"></button>',
      )
      .join("") +
    '</div></div><a class="fig" href="#/product/' +
    s.id +
    '"><i></i> ' +
    s.model +
    "<span> — " +
    s.caption +
    "</span>" +
    icon("up", 13) +
    "</a></div></div>"
  );
}
function categoryCard(c) {
  return (
    '<a class="category-card" href="' +
    catLink(c.id) +
    '">' +
    photo(c.img, c.name, 'loading="lazy"') +
    '<div class="category-fade"></div><div class="cat-no mono">' +
    products.filter((p) => p.category === c.id).length +
    ' products</div><div class="cat-title"><h3>' +
    c.name +
    "</h3>" +
    icon("up", 19) +
    "</div></a>"
  );
}
function card(p) {
  return (
    '<article class="product-card"><a class="product-pic" href="#/product/' +
    p.id +
    '">' +
    photo(p.img, p.name + " " + p.type, 'loading="lazy"') +
    '</a><div class="product-info"><a href="#/product/' +
    p.id +
    '"><small>' +
    p.type +
    "</small><h3>" +
    p.name +
    '</h3><small class="card-spec">' +
    esc(p.summary) +
    "</small><span>" +
    money(p.price) +
    ' <small class="price-unit">' +
    esc(p.priceUnit) +
    '</small></span></a><button class="square" data-act="add" data-id="' +
    p.id +
    '" aria-label="Add ' +
    p.name +
    ' to bag">' +
    icon("plus", 16) +
    "</button></div></article>"
  );
}
function articleCard(a) {
  return (
    '<a class="article-card" href="#/journal/' +
    a.id +
    '">' +
    photo(a.img, a.title, 'loading="lazy"') +
    '<div><small class="mono">' +
    a.tag +
    "</small><h3>" +
    a.title +
    "</h3></div>" +
    icon("up") +
    "</a>"
  );
}
function sectionHead(tag, title, link = "", label = "") {
  return (
    '<div class="section-head"><div>' +
    eyebrow(tag) +
    "<h2>" +
    title +
    "</h2></div>" +
    (link
      ? '<a class="textlink" href="' +
        link +
        '">' +
        label +
        icon("right", 16) +
        "</a>"
      : "") +
    "</div>"
  );
}
function home() {
  return (
    '<section id="hero" class="hero">' +
    hero() +
    '</section><section class="section container" id="categories">' +
    sectionHead("The catalog", "Shop by category", "#/shop", "View all") +
    '<div class="categories">' +
    categories.map(categoryCard).join("") +
    '</div></section><section class="section ruled"><div class="container">' +
    sectionHead(
      "The shortlist",
      "Featured equipment",
      "#/shop",
      "Browse catalog",
    ) +
    '<div class="product-grid">' +
    products.slice(0, 4).map(card).join("") +
    '</div></div></section><section class="section container">' +
    sectionHead("From the workbench", "Field notes", "#/journal", "All notes") +
    '<div class="article-grid">' +
    articles.map(articleCard).join("") +
    "</div></section>"
  );
}
function crumbs(items) {
  return (
    '<div class="crumb"><a href="#/">Home</a>' +
    items
      .map(
        ([label, href]) =>
          icon("next", 11) +
          (href
            ? '<a href="' + href + '">' + label + "</a>"
            : "<span>" + label + "</span>"),
      )
      .join("") +
    "</div>"
  );
}
function shop(id, params) {
  const c = categories.find((c) => c.id === id);
  const query = (params.get("q") || "").trim();
  const sort = params.get("sort") || "featured";
  let list = products.filter(
    (p) => (!c || c.id === p.category) && matches(p, query),
  );
  if (sort === "low" || sort === "high")
    list.sort((a, b) => (a.price - b.price) * (sort === "high" ? -1 : 1));
  if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
  const categoryHref = (cid) => {
    const s = params.toString();
    return "#/shop" + (cid ? "/" + cid : "") + (s ? "?" + s : "");
  };
  const collectionPicker = `<label class="collection-picker">Collection
    <select id="collection-picker"><option value="${esc(categoryHref(""))}">All equipment</option>
      ${categories.map((t) => `<option value="${esc(categoryHref(t.id))}" ${c?.id === t.id ? "selected" : ""}>${t.name}</option>`).join("")}
    </select></label>`;
  return (
    '<div class="container inner">' +
    crumbs([[c ? c.name : "Shop all"]]) +
    eyebrow("The catalog") +
    "<h1>" +
    (c ? c.name : "Shop all equipment") +
    '</h1><p class="collection-intro">' +
    (c
      ? esc(c.intro)
      : "Browse complete stereo speakers, individual drivers, crossover components, and amplification. Each listing includes its selling unit, example specifications, and the checks to make before choosing it for a system.") +
    '</p><div class="filters"><div class="pills"><a href="' +
    categoryHref("") +
    '" class="' +
    (!c ? "selected" : "") +
    '">All</a>' +
    categories
      .map(
        (t) =>
          '<a href="' +
          categoryHref(t.id) +
          '" class="' +
          (c?.id === t.id ? "selected" : "") +
          '">' +
          t.name +
          "</a>",
      )
      .join("") +
    "</div>" +
    collectionPicker +
    '<label class="sort"><span class="sort-caption">Sort by</span>' +
    icon("sliders", 16) +
    '<select id="sort" aria-label="Sort products">' +
    [
      ["featured", "Featured"],
      ["low", "Price: low to high"],
      ["high", "Price: high to low"],
      ["az", "Name: A to Z"],
    ]
      .map(
        ([k, v]) =>
          '<option value="' +
          k +
          '" ' +
          (k === sort ? "selected" : "") +
          ">" +
          v +
          "</option>",
      )
      .join("") +
    '</select></label></div><div class="results">' +
    list.length +
    " product" +
    (list.length === 1 ? "" : "s") +
    (query
      ? " matching “" +
        esc(query) +
        '” <button data-act="clear">Clear search</button>'
      : "") +
    '</div><div class="product-grid">' +
    list.map(card).join("") +
    "</div>" +
    (!list.length
      ? "<p>Try a broader search or choose another collection.</p>"
      : "") +
    "</div>"
  );
}
function detail(p) {
  const category = categories.find((c) => c.id === p.category);
  const guide = articles.find((a) => a.id === category.guide);
  const specs = Object.entries(p.specs)
    .map(
      ([label, value]) =>
        `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`,
    )
    .join("");
  const notes = p.notes
    .map(
      ([heading, copy]) =>
        `<section><h3>${esc(heading)}</h3><p>${esc(copy)}</p></section>`,
    )
    .join("");
  const questions = p.faq
    .map(
      ([question, answer]) =>
        `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`,
    )
    .join("");
  const alternatives = products.filter(
    (other) => other.category === p.category && other.id !== p.id,
  );
  return `<div class="container inner">
    ${crumbs([["Catalog", "#/shop"], [category.name, catLink(category.id)], [p.name]])}
    <div class="detail">
      <div class="detail-photo">${photo(p.img, p.name + " " + p.type)}</div>
      <div class="detail-copy">
        ${eyebrow(p.type)}
        <h1>${esc(p.name)}</h1>
        <p class="model-summary">${esc(p.summary)}</p>
        <p>${esc(p.desc)}</p>
        <div class="price">${money(p.price)} <small>${esc(p.priceUnit)}</small></div>
        <div class="buy"><label>Quantity <input id="quantity" type="number" required value="1" min="1" max="99"></label>
        <button class="btn primary" data-act="buy" data-id="${p.id}">Add to bag ${icon("bag", 17)}</button></div>
        <small class="model-ref">Model ${esc(p.id.toUpperCase())} · Concept product</small>
        <small>Sample pricing and specifications for this demo.</small>
      </div>
    </div>
    <div class="product-manual">
      <section class="spec-block">
        <h2>Technical specifications</h2><dl>${specs}</dl>
      </section>
      <section class="build-notes">
        <h2>Setup &amp; compatibility</h2>${notes}
      </section>
    </div>
    <div class="product-resources">
      <section class="product-faq"><h2>Product questions</h2>${questions}</section>
      <aside class="product-guide"><h2>From the workbench</h2>${articleCard(guide)}</aside>
    </div>
    <section class="section">${sectionHead("In this collection", "Explore more", catLink(category.id), "View collection")}
    <div class="product-grid">${alternatives.map(card).join("")}</div></section>
  </div>`;
}
function journal(a) {
  if (!a)
    return (
      '<div class="container inner">' +
      crumbs([["Field notes"]]) +
      eyebrow("From the workbench") +
      '<h1>Field notes</h1><div class="article-grid">' +
      articles.map(articleCard).join("") +
      "</div></div>"
    );
  return (
    '<div class="container inner">' +
    crumbs([["Field notes", "#/journal"], [a.tag]]) +
    '<div class="editorial"><div>' +
    eyebrow(a.tag) +
    "<h1>" +
    a.title +
    '</h1><p class="lead">' +
    a.intro +
    "</p>" +
    a.parts.map(([h, p]) => "<h2>" + h + "</h2><p>" + p + "</p>").join("") +
    buttonLink("#/shop", "Explore the catalog") +
    "</div>" +
    photo(a.img, a.tag) +
    "</div></div>"
  );
}
function about() {
  return (
    '<div class="container inner">' +
    crumbs([["About"]]) +
    '<div class="editorial"><div>' +
    eyebrow("About Ignite") +
    '<h1>For the listening room and the workbench.</h1><p class="lead">Ignite is a concept store for loudspeakers and the parts that make them sing.</p><p>Start with a complete system, explore a single driver, or get to know the crossover inside the cabinet. Our catalog brings those choices together with clear specifications and practical build notes.</p>' +
    buttonLink("#/shop", "Explore the catalog") +
    "</div>" +
    photo("monitor", "Walnut bookshelf monitor") +
    "</div></div>"
  );
}
function route() {
  const [path, search = ""] = location.hash.replace(/^#\/?/, "").split("?");
  const [page, id] = path.split("/");
  if (panel.open) panel.close();
  header();
  let html, title;
  if (!page || page === "main") {
    html = home();
    title = "Speakers & Components";
  } else if (page === "shop") {
    html = shop(id, new URLSearchParams(search));
    title = categories.find((c) => c.id === id)?.name || "Shop all";
  } else if (page === "product" && getProduct(id)) {
    html = detail(getProduct(id));
    title = getProduct(id).name;
  } else if (page === "journal") {
    const a = articles.find((a) => a.id === id);
    html = journal(a);
    title = a?.title || "Field notes";
  } else if (page === "about") {
    html = about();
    title = "About";
  } else {
    html =
      '<div class="container inner"><h1>Page not found</h1>' +
      buttonLink("#/", "Return home") +
      "</div>";
    title = "Page not found";
  }
  main.innerHTML = html;
  document.title = title + " — Ignite";
  window.scrollTo({ top: 0, behavior: "instant" });
}
function matches(p, q) {
  return [
    p.name,
    p.type,
    p.category,
    categories.find((c) => c.id === p.category).name,
    p.desc,
    p.summary,
    p.id,
    ...Object.values(p.specs),
  ]
    .join(" ")
    .toLowerCase()
    .includes(q.toLowerCase());
}
function showPanel(title, body, kind = "drawer") {
  panel.className = kind;
  panel.innerHTML =
    '<div class="panel-head"><h2 id="panel-title">' +
    title +
    '</h2><button class="iconbtn" data-act="close" aria-label="Close dialog">' +
    icon("close") +
    '</button></div><div class="panel-body">' +
    body +
    "</div>";
  if (!panel.open) panel.showModal();
  document.body.classList.add("locked");
}
function openBag() {
  const rows = products.filter((p) => cart[p.id]);
  const body = rows.length
    ? '<div class="bag-list">' +
      rows
        .map(
          (p) =>
            '<div class="bag-row">' +
            photo(p.img, p.name) +
            '<div><a href="#/product/' +
            p.id +
            '">' +
            p.name +
            "</a><small>" +
            p.type +
            '</small><div class="stepper"><button data-act="less" data-id="' +
            p.id +
            '" aria-label="Decrease ' +
            p.name +
            ' quantity">' +
            icon("minus", 13) +
            "</button><span>" +
            cart[p.id] +
            '</span><button data-act="more" data-id="' +
            p.id +
            '" aria-label="Increase ' +
            p.name +
            ' quantity" ' +
            (cart[p.id] >= 99 ? "disabled" : "") +
            ">" +
            icon("plus", 13) +
            '</button></div></div><div class="bag-end">' +
            money(p.price * cart[p.id]) +
            '<button data-act="remove" data-id="' +
            p.id +
            '">Remove</button></div></div>',
        )
        .join("") +
      '</div><div class="total"><span>Subtotal</span><strong>' +
      money(bagTotal()) +
      '</strong></div><button class="btn primary wide" data-act="checkout">Demo checkout ' +
      icon("right", 17) +
      "</button>"
    : '<div class="empty">' +
      icon("bag", 42) +
      "<h3>Your bag is empty</h3><p>Find a speaker or component for your next build.</p>" +
      buttonLink("#/shop", "Explore the catalog") +
      "</div>";
  showPanel("Your bag <small>(" + bagCount() + ")</small>", body);
}
function changeCart(id, n) {
  if (!getProduct(id)) return;
  const qty = Math.min(99, Math.max(0, (cart[id] || 0) + n));
  if (qty) cart[id] = qty;
  else delete cart[id];
  saveLocal("bag", cart);
  header();
}
function searchResults(query) {
  const q = query.trim(),
    items = products.filter((p) => matches(p, q));
  return (
    '<small class="mono">' +
    (q ? "Search results" : "Featured equipment") +
    "</small>" +
    items
      .slice(0, 4)
      .map(
        (p) =>
          '<a class="search-result" href="#/product/' +
          p.id +
          '">' +
          photo(p.img, p.name) +
          "<div><strong>" +
          p.name +
          "</strong><small>" +
          p.type +
          "</small></div><span>" +
          money(p.price) +
          "</span></a>",
      )
      .join("") +
    (items.length
      ? '<a class="textlink" href="#/shop?q=' +
        encodeURIComponent(q) +
        '">View all ' +
        items.length +
        " products " +
        icon("right", 16) +
        "</a>"
      : "<p>No matching products. Try “woofer” or “amplifier”.</p>")
  );
}
function updateQuery(key, value) {
  const [path, query] = location.hash.split("?");
  const params = new URLSearchParams(query);
  if (value) params.set(key, value);
  else params.delete(key);
  location.hash = path + (params.size ? "?" + params : "");
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a?.classList.contains("skip")) {
    e.preventDefault();
    main.focus();
    main.scrollIntoView({ block: "start" });
    return;
  }
  if (a && panel.contains(a) && panel.open) panel.close();
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const { act, id } = el.dataset;
  if (act === "close") {
    panel.close();
    return;
  }
  if (act === "slide") {
    slide = Number(id);
    document.querySelector("#hero").innerHTML = hero();
    document
      .querySelector('[data-act="slide"][data-id="' + id + '"]')
      .focus({ preventScroll: true });
    return;
  }
  if (act === "bag") {
    openBag();
    return;
  }
  if (act === "add" || act === "buy") {
    const input = document.querySelector("#quantity");
    if (act === "buy" && !input.reportValidity()) return;
    const amount = act === "buy" ? Number(input.value) : 1;
    if ((cart[id] || 0) + amount > 99) {
      toast("Maximum 99 units per product");
      return;
    }
    changeCart(id, amount);
    if (act === "buy") openBag();
    else toast(getProduct(id).name + " added to bag");
    return;
  }
  if (["more", "less", "remove"].includes(act)) {
    changeCart(id, act === "more" ? 1 : act === "less" ? -1 : -cart[id]);
    openBag();
    panel
      .querySelector('[data-act="' + act + '"][data-id="' + id + '"]')
      ?.focus();
    return;
  }
  if (act === "checkout" && bagCount()) {
    showPanel(
      "Review demo order",
      '<p>This local checkout uses sample products and prices. No payment or delivery details are needed.</p><div class="summary">' +
        products
          .filter((p) => cart[p.id])
          .map(
            (p) =>
              "<div><span>" +
              p.name +
              " × " +
              cart[p.id] +
              "</span><strong>" +
              money(p.price * cart[p.id]) +
              "</strong></div>",
          )
          .join("") +
        '</div><div class="total"><span>Demo total</span><strong>' +
        money(bagTotal()) +
        '</strong></div><button class="btn primary wide" data-act="confirm">Complete demo order ' +
        icon("right", 16) +
        '</button><button class="under" data-act="bag">Back to bag</button>',
    );
    return;
  }
  if (act === "confirm" && bagCount()) {
    const total = bagTotal(),
      count = bagCount();
    cart = {};
    saveLocal("bag", cart);
    header();
    showPanel(
      "Demo order complete",
      '<div class="empty">' +
        icon("check", 42) +
        "<h3>Thanks for trying Ignite.</h3><p>" +
        count +
        " sample item" +
        (count === 1 ? "" : "s") +
        " · " +
        money(total) +
        ". No payment was taken or order sent.</p>" +
        buttonLink("#/shop", "Continue browsing") +
        "</div>",
    );
    return;
  }
  if (act === "clear") {
    updateQuery("q", "");
    return;
  }
  if (act === "search") {
    showPanel(
      "Search the catalog",
      '<form id="search-form" class="searchfield">' +
        icon("search") +
        '<input id="search-input" type="search" placeholder="Search speakers, drivers, parts…" aria-label="Search products" autocomplete="off"></form><div id="search-results">' +
        searchResults("") +
        "</div>",
      "modal",
    );
    document.querySelector("#search-input").focus();
    return;
  }
  if (act === "collections" || act === "menu") {
    showPanel(
      act === "menu" ? "Menu" : "Collections",
      '<div class="menu-list"><a href="#/shop">Shop all equipment ' +
        icon("right", 17) +
        "</a>" +
        categories
          .map(
            (c) =>
              '<a href="' +
              catLink(c.id) +
              '">' +
              photo(c.img, "") +
              "<span>" +
              c.name +
              "</span>" +
              icon("right", 17) +
              "</a>",
          )
          .join("") +
        (act === "menu"
          ? '<a href="#/journal">Field notes</a><a href="#/about">About Ignite</a>'
          : "") +
        "</div>",
      "modal",
    );
    return;
  }
  if (act === "social") {
    const channel = id === "instagram" ? "Instagram" : "YouTube";
    showPanel(
      channel,
      "<p>Our " +
        channel +
        " channel will appear here when Ignite launches.</p>",
      "modal",
    );
    return;
  }
  if (act === "help") {
    showPanel(
      "Customer care",
      "<details open><summary>Can I buy these products?</summary><p>This is a local concept store. Add sample products to your bag and try demo checkout.</p></details><details><summary>Shipping and returns</summary><p>Shipping regions, delivery times, and return terms will be added when the catalog launches.</p></details><details><summary>Product questions</summary><p>Each product page includes example technical specifications. The field notes cover driver basics and planning a two-way build.</p></details>",
      "modal",
    );
  }
});
panel.addEventListener("click", (e) => {
  if (e.target !== panel) return;
  const r = panel.getBoundingClientRect();
  if (
    e.clientX < r.left ||
    e.clientX > r.right ||
    e.clientY < r.top ||
    e.clientY > r.bottom
  )
    panel.close();
});
panel.addEventListener("close", () => {
  if (!panel.open) document.body.classList.remove("locked");
});
document.addEventListener("input", (e) => {
  if (e.target.id === "search-input")
    document.querySelector("#search-results").innerHTML = searchResults(
      e.target.value,
    );
});
document.addEventListener("change", (e) => {
  if (e.target.id === "collection-picker") location.hash = e.target.value;
  if (e.target.id === "sort") updateQuery("sort", e.target.value);
});
document.addEventListener("submit", (e) => {
  if (e.target.id === "search-form") {
    e.preventDefault();
    const q = document.querySelector("#search-input").value.trim();
    panel.close();
    location.hash = "/shop?q=" + encodeURIComponent(q);
  }
  if (e.target.id === "newsletter") {
    e.preventDefault();
    const input = document.querySelector("#signup"),
      email = input.value.trim().toLowerCase();
    const stored = loadLocal("subscribers", []);
    const emails = Array.isArray(stored) ? stored : [];
    const ok = saveLocal("subscribers", [...new Set([...emails, email])]);
    toast(
      ok ? "Sign-up saved on this device" : "Browser storage is unavailable",
    );
    if (ok) input.value = "";
  }
});
window.addEventListener("storage", (e) => {
  if (e.key !== "ignite-bag") return;
  const value = loadLocal("bag", {});
  cart = Object.fromEntries(
    products
      .filter((p) => Number.isInteger(value?.[p.id]) && value[p.id] > 0)
      .map((p) => [p.id, Math.min(99, value[p.id])]),
  );
  header();
  if (
    panel.open &&
    panel.querySelector('[data-act="checkout"],[data-act="confirm"],.bag-list')
  )
    openBag();
});
window.addEventListener("hashchange", route);
footer();
route();
