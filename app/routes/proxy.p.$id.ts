import type { LoaderFunctionArgs } from "@remix-run/node";
import { getRingById, getRelated } from "~/models/rings.mock.server";

function money(n:number){ return `$${Number(n).toLocaleString("en-US")}`; }

export async function loader({ params }: LoaderFunctionArgs) {
  const id = (params.id || "").trim();
  const ring = id ? getRingById(id) : null;

  // TEMP: if not found, fallback to first mock to avoid blank page
  const use = ring || (await import("~/models/rings.mock.server")).RINGS_MOCK[0];

  // If even fallback empty (shouldn't happen), 404
  if (!use) {
    return new Response("<h1>Not found</h1>", { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  const thumbs = use.images?.length ? use.images : [use.img];
  const sizeOptions = use.sizeOptions?.length ? use.sizeOptions : ["5","6","7","8"];
  const metalOptions = use.metalOptions?.length ? use.metalOptions : [use.metal];
  const related = getRelated({ shape: use.shape, metal: use.metal, excludeId: use.id }, 8);

  const thumbHtml = thumbs.map((src,i)=>`
    <button class="thumb ${i===0?'active':''}" data-src="${src}"><img src="${src}" alt="thumb"/></button>
  `).join("");

  const metalHtml = metalOptions.map(m=>`
    <label class="chip"><input type="radio" name="metal" ${m===use.metal?'checked':''}/><span>${m}</span></label>
  `).join("");

  const sizeHtml = sizeOptions.map(s=>`<option>${s}</option>`).join("");

  const relatedHtml = related.map(r=>`
    <a class="card" href="/apps/ring-builder/p/${r.id}">
      <div class="imgwrap"><img src="${r.img}" alt="${r.title}"/></div>
      <div class="card-body"><h3 class="card-title">${r.title}</h3><div class="price">From ${money(r.price)}</div></div>
    </a>
  `).join("");

  const html = `<!doctype html><html><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>${use.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root{ --line:#ececec; --muted:#6b7280; --purple:#3c0c56; --bg:#fafafa }
  *{ box-sizing:border-box }
  body{ margin:0; font-family:Poppins,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial }
  h1,h2,h3{ font-family:"Playfair Display", Georgia, serif }
  .wrap{ width:100vw; margin-left:calc(50% - 50vw); padding:24px 20px 60px }
  .grid{ display:grid; grid-template-columns:1.1fr 0.9fr; gap:32px; align-items:start }
  @media (max-width:980px){ .grid{ grid-template-columns:1fr } }
  .gallery{ display:grid; grid-template-columns:90px 1fr; gap:16px }
  .mainimg{ background:var(--bg); border:1px solid var(--line); border-radius:16px; padding:10px; aspect-ratio:1/1; display:flex; align-items:center; justify-content:center }
  .mainimg img{ max-width:95%; max-height:95%; object-fit:contain }
  .thumbs{ display:flex; flex-direction:column; gap:10px }
  .thumb{ border:1px solid var(--line); background:#fff; border-radius:12px; padding:6px; cursor:pointer }
  .thumb.active{ outline:2px solid #c4a7e7 }
  .thumb img{ width:100%; height:68px; object-fit:contain }
  .title{ font-size:22px; margin:0 0 6px }
  .price{ color:var(--purple); font-weight:700; margin:6px 0 14px }
  .k{ color:#111; font-weight:600 } .v{ color:#374151 }
  .row{ display:flex; gap:6px; align-items:center; margin:8px 0 }
  .pill{ background:#f3f4f6; padding:6px 10px; border-radius:999px; font-size:13px }
  .chip{ display:inline-flex; gap:8px; align-items:center; border:1px solid var(--line); border-radius:999px; padding:6px 12px; margin-right:8px }
  .chip input{ accent-color:var(--purple) }
  select{ padding:8px 10px; border:1px solid var(--line); border-radius:10px; }
  .btn{ display:inline-block; padding:10px 14px; border-radius:12px; border:1px solid var(--line); background:#fff; cursor:pointer }
  .btn.primary{ background:var(--purple); color:#fff; border:0 }
  .badges{ display:grid; grid-auto-flow:column; gap:14px; margin:14px 0 }
  .badge{ display:flex; flex-direction:column; gap:6px; align-items:center; font-size:12px; color:#374151 }
  .section{ margin:34px 0 }
  .cards{ display:grid; gap:20px; grid-template-columns:repeat(3,minmax(0,1fr)); }
  @media (max-width:980px){ .cards{ grid-template-columns:repeat(2,1fr) } }
  @media (max-width:640px){ .cards{ grid-template-columns:1fr } }
  .card{ border:1px solid var(--line); border-radius:16px; text-decoration:none; color:inherit; overflow:hidden; background:#fff }
  .imgwrap{ aspect-ratio:1/1; background:#f7f7f7; display:flex; align-items:center; justify-content:center }
  .imgwrap img{ max-width:92%; max-height:92% }
  .card-body{ padding:12px 14px }
  .faq{ border-top:1px solid var(--line) }
  details{ border-bottom:1px solid var(--line); padding:8px 0 }
  summary{ list-style:none; cursor:pointer; padding:8px 0; font-weight:600 }
  summary::marker, summary::-webkit-details-marker{ display:none }
  .footstrip{ display:grid; gap:12px; grid-auto-flow:column; overflow:auto; padding:8px 0 }
  .footstrip img{ height:90px; border-radius:12px; border:1px solid var(--line) }
</style>
</head>
<body>
  <div class="wrap">
    <div class="grid">
      <section class="gallery">
        <div class="thumbs">${thumbHtml}</div>
        <div class="mainimg"><img id="mainImg" src="${thumbs[0]}" alt="${use.title}"/></div>
      </section>

      <section>
        <h1 class="title">${use.title}</h1>
        <div class="price">From ${money(use.price)}</div>

        <div class="row"><span class="k">Shape:</span><span class="v">${use.shape}</span></div>
        <div class="row"><span class="k">Metal:</span><span class="v">${use.metal}</span></div>
        ${use.bandWidth ? `<div class="row"><span class="k">Band width:</span><span class="pill">${use.bandWidth} mm</span></div>` : ""}

        <div class="section">
          <div style="font-weight:600;margin-bottom:8px">Choose metal</div>
          <div>${metalHtml}</div>
        </div>

        <div class="section" style="display:flex; gap:12px; align-items:center">
          <label class="k" for="sizeSel">Ring Size</label>
          <select id="sizeSel">${sizeHtml}</select>
        </div>

        <div class="section" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap">
          <button class="btn primary">Book a Virtual or In-Person Appointment</button>
          <a class="btn" href="/apps/ring-builder/grid?theme=1">Select Stone For Your Ring</a>
        </div>

        <div class="section" style="display:flex; gap:8px">
          <input placeholder="Enter your email" style="flex:1;padding:10px;border:1px solid var(--line);border-radius:10px"/>
          <button class="btn">SUBMIT</button>
        </div>

        <div class="badges">
          <div class="badge"><div>🚚</div><div>Free Fast Shipping</div></div>
          <div class="badge"><div>↩️</div><div>Free 30-day Returns</div></div>
          <div class="badge"><div>🔁</div><div>Size & Exchange</div></div>
          <div class="badge"><div>🛡️</div><div>Jewellery Warranty</div></div>
        </div>
      </section>
    </div>

    <div class="section">
      <h2>Our Client Reviews</h2>
      <div style="color:#a855f7">★★★★★</div>
      <p style="max-width:680px;color:#374151">I loved everything about the craftsmanship and customer care!</p>
    </div>

    <div class="section">
      <h2>Rings You May Love</h2>
      <div class="cards">${relatedHtml}</div>
    </div>

    <div class="section">
      <div style="border:1px solid var(--line); border-radius:16px; padding:18px; display:grid; grid-template-columns:1.2fr 1fr; gap:16px; align-items:center">
        <img src="/assets/rings/banner.jpg" alt="Custom Engagement Rings" style="width:100%; border-radius:12px"/>
        <div>
          <h3>Custom Engagement Rings</h3>
          <p style="color:#374151">Create your own ring from layout to finish within your budget.</p>
          <a class="btn">Create Your Own</a>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="footstrip">
        ${thumbs.slice(0,6).map(src=>`<img src="${src}" alt=""/>`).join("")}
      </div>
    </div>

    <div class="section faq">
      <h2>Frequently Asked Questions</h2>
      <details><summary>What does a ${use.title} symbolize?</summary><div style="color:#374151;padding:8px 0">Timeless elegance & personal craftsmanship.</div></details>
      <details><summary>Can I customize this ring?</summary><div style="color:#374151;padding:8px 0">Yes—metal, size and stone can be customized.</div></details>
      <details><summary>Do you offer returns & warranty?</summary><div style="color:#374151;padding:8px 0">30-day returns & lifetime manufacturing warranty.</div></details>
      <details><summary>How do I find my size?</summary><div style="color:#374151;padding:8px 0">Use our size guide or book an appointment.</div></details>
      <details><summary>Is shipping free?</summary><div style="color:#374151;padding:8px 0">Fast, free shipping on all orders.</div></details>
    </div>
  </div>

  <script>
    (function(){
      const main = document.getElementById('mainImg');
      document.querySelectorAll('.thumb').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          document.querySelectorAll('.thumb').forEach(b=>b.classList.remove('active'));
          btn.classList.add('active');
          main.src = btn.dataset.src;
        });
      });
    })();
  </script>
</body></html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors https://*.myshopify.com https://admin.shopify.com;"
    }
  });
}
