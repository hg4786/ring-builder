type Item = {
  id: string;
  title: string;
  price: number;
  img: string;
  metal: string;
  shape: string;
  bars: [number, number, number];
  icons: string[];
};

const items: Item[] = [
  { id:"1", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/rose-1.png",   metal:"Rose Gold",  shape:"Oval",   bars:[78,40,62], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
  { id:"2", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/yellow-1.png", metal:"Yellow Gold",shape:"Oval",   bars:[70,50,60], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
  { id:"3", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/white-1.png",  metal:"White Gold", shape:"Oval",   bars:[65,55,58], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
  { id:"4", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/rose-2.png",   metal:"Rose Gold",  shape:"Round", bars:[45,75,35], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
  { id:"5", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/yellow-2.png", metal:"Yellow Gold",shape:"Round", bars:[60,30,80], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
  { id:"6", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/white-2.png",  metal:"White Gold", shape:"Round", bars:[85,25,55], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
  { id:"7", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/rose-3.png",   metal:"Rose Gold",  shape:"Emerald",bars:[35,65,45], icons:["/assets/icons/cut.png","/assets/icons/shape.png"] },
  { id:"8", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/yellow-3.png", metal:"Yellow Gold",shape:"Emerald",bars:[70,40,60], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
  { id:"9", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/white-3.png",  metal:"White Gold", shape:"Emerald",bars:[50,80,30], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
  { id:"10", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/rose-4.png",   metal:"Rose Gold",  shape:"Pear",  bars:[65,35,70], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
  { id:"11", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/yellow-4.png", metal:"Yellow Gold",shape:"Pear",  bars:[40,70,50], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
  { id:"12", title:"Classic Solitaire Ring", price:16570, img:"/assets/rings/white-4.png",  metal:"White Gold", shape:"Pear",  bars:[75,45,65], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
];

function money(n: number) { return `$${n.toLocaleString("en-US")}`; }

function card(i: Item) {
  const bars = i.bars.map((w, idx) => `<div class="bar"><span style="width:${w}%;" class="f${idx}"></span></div>`).join("");
  const icons = i.icons.map((src) => `<img src="${src}" alt="" loading="lazy" class="meta-ic" />`).join("");
  return `
  <a class="card" data-id="${i.id}" href="/apps/ring-builder/p/${encodeURIComponent(i.id)}">
    <div class="imgwrap"><img src="${i.img}" alt="${i.title}" loading="lazy" /></div>
    <div class="card-body">
      <h3 class="card-title">${i.title}</h3>
      <div class="price">From ${money(i.price)}</div>
      <hr class="sep"/>
      <div class="row"><span class="k">Metal :</span><span class="v">${i.metal}</span></div>
      <div class="bars">${bars}</div>
      <div class="row"><span class="k">Shape :</span><span class="v">${i.shape}</span></div>
      <div class="meta">${icons}</div>
    </div>
  </a>`;
}

export async function loader() {
  const cards = items.map(card).join("");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Ring Builder</title>

<!-- Fonts: Heading = Playfair Display, Products = Poppins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

<style>
  :root{ --purple:#3c0c56; --lav:#e9d9f5; --muted:#6b7280; --line:#ececec; --bg:#f8f8f8; --gap:28px; }
  *{ box-sizing:border-box }
  html,body{ margin:0; padding:0; width:100%; }
  body{ font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }

  /* FULL WIDTH WRAPPERS (edge-to-edge inside theme iframe) */
  .hero{ width:100vw; margin-left:calc(50% - 50vw); background:linear-gradient(180deg,#2a0a4b 0%, #4b1a6c 100%); color:#fff; text-align:center; padding:28px 16px; }
  .hero p{ margin:0; line-height:1.45; font-family:'Playfair Display', Georgia, serif; font-size:24px; }

  .wrap{ width:100vw; margin-left:calc(50% - 50vw); padding:0 24px 40px; }

  /* shape strip */
  .shapes{ display:grid; grid-auto-flow:column; grid-auto-columns:minmax(120px,1fr); gap:16px; padding:16px 0; overflow:auto; }
  .pill{ border:1px solid var(--line); border-radius:12px; background:#fff; padding:12px 10px; display:flex; flex-direction:column; align-items:center; gap:8px; min-width:120px; cursor:pointer }
  .pill img{ height:44px; object-fit:contain }
  .pill.active{ outline:2px solid var(--purple); background:var(--lav) }

  /* filters row */
  .filters{ display:flex; align-items:center; gap:18px; border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:14px 0; color:#374151 }
  .filters .btn{ background:#fff; border:0; color:#111; font-size:14px; display:flex; gap:6px; align-items:center; cursor:pointer }
  .filters .sep{ height:6px; width:6px; border-radius:50%; background:#d1d5db }

  /* grid (responsive) */
  .grid{ display:grid; gap:var(--gap); margin-top:18px; grid-template-columns:repeat(3,minmax(0,1fr)); }
  @media (max-width:980px){ .grid{ grid-template-columns:repeat(2,minmax(0,1fr)); } }
  @media (max-width:640px){ .grid{ grid-template-columns:1fr; } }

  /* banner block */
  .banner{ position:relative; border:1px solid var(--line); border-radius:16px; overflow:hidden }
  .banner img{ display:block; width:100%; height:100%; object-fit:cover }
  .banner .cap{ position:absolute; left:16px; bottom:16px; background:#fff; padding:10px 14px; border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,.08) }

  /* product cards */
  .card{ border:1px solid var(--line); border-radius:16px; background:#fff; overflow:hidden; transition:box-shadow .15s, transform .15s; text-decoration:none; color:inherit; display:block; }
  .card:hover{ box-shadow:0 12px 24px rgba(0,0,0,.08); transform:translateY(-1px) }
  .imgwrap{ background:var(--bg); aspect-ratio:1/1; display:flex; align-items:center; justify-content:center }
  .imgwrap img{ max-width:90%; max-height:90%; object-fit:contain; display:block }
  .card-body{ padding:14px 16px 18px }
  .card-title{ font-size:14px; margin:10px 0 4px; text-align:center; font-weight:600 }
  .price{ color:var(--purple); font-weight:700; text-align:center; margin-bottom:12px }
  .sep{ border:none; border-top:1px solid var(--line); margin:10px 0 12px }
  .row{ display:flex; gap:6px; font-size:13px; color:#111; align-items:center; justify-content:center }
  .row .k{ font-weight:600 }
  .bars{ display:flex; gap:10px; align-items:center; margin:10px 0 }
  .bar{ background:#e5e7eb; border-radius:999px; height:6px; flex:1 }
  .bar>span{ display:block; height:100%; border-radius:999px; background:#c7b0dd }
  .bar>span.f1{ background:#d7c6e7 }
  .bar>span.f2{ background:#e3d7ef }
  .meta{ display:flex; gap:10px; align-items:center; margin-top:10px; justify-content:center }
  .meta-ic{ width:18px; height:18px; opacity:.65; filter:grayscale(100%) }
  .badge{ display:inline-flex; gap:6px; align-items:center; background:#2b0a48; color:#fff; border-radius:0 6px 6px 0; padding:6px 10px; margin:12px 0 0 0; font-size:12px }
</style>
</head>
<body>
  <div class="hero">
    <p>Designed with care, perfected with craftsmanship—your<br/>engagement ring is made to be treasured forever.</p>
  </div>

  <div class="wrap">
    <div class="shapes">
      ${[
        ["Solitaire","/assets/rings/shape-solitaire.png",true],
        ["Oval","/assets/rings/shape-oval.png",false],
        ["Trilogy","/assets/rings/shape-trilogy.png",false],
        ["Platinum","/assets/rings/shape-platinum.png",false],
        ["Diamond Band","/assets/rings/shape-diamondband.png",false],
        ["Halo","/assets/rings/shape-halo.png",false],
        ["Round","/assets/rings/shape-round.png",false],
        ["Toi et Moi","/assets/rings/shape-toietmoi.png",false],
        ["Emerald Cut","/assets/rings/shape-emerald.png",false]
      ].map(([label,src,active])=>`
        <div class="pill ${active?'active':''}">
          <img src="${src}" alt="${label}" loading="lazy"/>
          <div style="font-size:13px">${label}</div>
        </div>`).join("")}
    </div>

    <div class="filters">
      <button class="btn">Metal</button><span class="sep"></span>
      <button class="btn">Style</button><span class="sep"></span>
      <button class="btn">Shape</button><span class="sep"></span>
      <button class="btn">Carat Weight</button><span class="sep"></span>
      <button class="btn">Advance Property ▾</button>
      <div style="margin-left:auto;display:flex;gap:14px;align-items:center">
        <span style="font-size:14px;display:flex;gap:8px;align-items:center"><span style="width:12px;height:12px;border:2px solid #c4a7e7;border-radius:50%;display:inline-block"></span> Quickship</span>
        <span style="color:#6b7280">Sort :</span><strong>Popular</strong>
        <span style="opacity:.7">☰</span><span style="opacity:.7">▦</span>
      </div>
    </div>

    <div class="badge">★ Best Seller</div>

    <section class="grid">
      ${cards}
      <div class="banner">
        <img src="/assets/rings/banner.jpg" alt="Lifetime Warranty" />
        <div class="cap">
          <div style="font-weight:700;margin-bottom:4px">Lifetime Warranty</div>
          <div style="font-size:13px;color:#4b5563;margin-bottom:8px">Peace of mind, for a lifetime.</div>
          <a href="#" style="display:inline-block;border:1px solid #e5e7eb;padding:8px 12px;border-radius:10px;color:#111;text-decoration:none">Learn More</a>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // allow Online Store to embed
      "Content-Security-Policy": "frame-ancestors https://*.myshopify.com https://admin.shopify.com;",
    },
  });
}
