// Full-width storefront App Proxy UI - SSR HTML only
// Live products from Shopify Admin GraphQL API
// Server-side filtering via URL query params

import { fetchRingsAdmin, type RingFilters, type RingProduct } from "../models/rings.server";

type Item = RingProduct & {
  img: string; // alias for imageUrl
  carat: number;
  quickship: boolean;
};
  
  // Static fallback data (will be replaced by live products)
  const fallbackItems: Item[] = [
    { id:"1", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/rose-1.png", img:"/assets/rings/rose-1.png",   metal:"Rose Gold", shape:"Oval",   carat:1.2, quickship:true,  bars:[78,40,62], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
    { id:"2", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/yellow-1.png", img:"/assets/rings/yellow-1.png", metal:"Yellow Gold", shape:"Oval", carat:1.0, quickship:false, bars:[70,50,60], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
    { id:"3", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/white-1.png", img:"/assets/rings/white-1.png",  metal:"White Gold", shape:"Oval",  carat:1.5, quickship:true,  bars:[65,55,58], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
    { id:"4", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/rose-2.png", img:"/assets/rings/rose-2.png",   metal:"Rose Gold", shape:"Round", carat:0.8, quickship:false, bars:[45,75,35], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
    { id:"5", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/yellow-2.png", img:"/assets/rings/yellow-2.png", metal:"Yellow Gold", shape:"Round", carat:1.3, quickship:true,  bars:[60,30,80], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
    { id:"6", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/white-2.png", img:"/assets/rings/white-2.png",  metal:"White Gold", shape:"Round", carat:1.1, quickship:false, bars:[85,25,55], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
    { id:"7", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/rose-3.png", img:"/assets/rings/rose-3.png",   metal:"Rose Gold", shape:"Emerald", carat:1.4, quickship:true,  bars:[35,65,45], icons:["/assets/icons/cut.png","/assets/icons/shape.png"] },
    { id:"8", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/yellow-3.png", img:"/assets/rings/yellow-3.png", metal:"Yellow Gold", shape:"Emerald", carat:0.9, quickship:false, bars:[70,40,60], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
    { id:"9", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/white-3.png", img:"/assets/rings/white-3.png",  metal:"White Gold", shape:"Emerald", carat:1.6, quickship:true,  bars:[50,80,30], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
    { id:"10", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/rose-4.png", img:"/assets/rings/rose-4.png",   metal:"Rose Gold", shape:"Pear", carat:1.7, quickship:false, bars:[65,35,70], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png"] },
    { id:"11", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/yellow-4.png", img:"/assets/rings/yellow-4.png", metal:"Yellow Gold", shape:"Pear", carat:1.2, quickship:true,  bars:[40,70,50], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/clarity.png"] },
    { id:"12", title:"Classic Solitaire Ring", price:16570, imageUrl:"/assets/rings/white-4.png", img:"/assets/rings/white-4.png",  metal:"White Gold", shape:"Pear", carat:1.8, quickship:false, bars:[75,45,65], icons:["/assets/icons/cut.png","/assets/icons/shape.png","/assets/icons/cert.png","/assets/icons/clarity.png"] },
  ];
  
  function money(n: number) {
    return `$${n.toLocaleString("en-US")}`;
  }

  function convertToItems(products: RingProduct[]): Item[] {
    return products.map(product => ({
      ...product,
      img: product.imageUrl,
      carat: Math.random() * 1.5 + 0.5, // Random carat for now
      quickship: Math.random() > 0.5, // Random quickship for now
    }));
  }

  function buildUrl(params: Record<string, string | number | boolean | undefined>): string {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        search.set(key, String(value));
      }
    });
    return search.toString() ? `?${search.toString()}` : '';
  }
  
  function card(i: Item) {
    const bars = i.bars
      .map((w: number, idx: number) => `<div class="bar"><span style="width:${w}%;" class="f${idx}"></span></div>`)
      .join("");
    const icons = i.icons
      .map((src: string) => `<img src="${src}" alt="" loading="lazy" class="meta-ic" />`)
      .join("");
  
    return `
    <article class="card">
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
    </article>`;
  }
  
  export async function loader({ request }: { request: Request }) {
    const url = new URL(request.url);
    
    // Get shop from query param or headers
    const shop = url.searchParams.get('shop') || request.headers.get('x-shopify-shop-domain');
    if (!shop) {
      return new Response('Missing shop parameter', { status: 400 });
    }

    const params: RingFilters = {
      shape: url.searchParams.get('shape') || undefined,
      metal: url.searchParams.get('metal') || undefined,
      priceMin: url.searchParams.get('priceMin') ? Number(url.searchParams.get('priceMin')) : undefined,
      priceMax: url.searchParams.get('priceMax') ? Number(url.searchParams.get('priceMax')) : undefined,
      caratMin: url.searchParams.get('caratMin') ? Number(url.searchParams.get('caratMin')) : undefined,
      caratMax: url.searchParams.get('caratMax') ? Number(url.searchParams.get('caratMax')) : undefined,
      quickship: url.searchParams.get('quickship') ? url.searchParams.get('quickship') === '1' : undefined,
      sort: url.searchParams.get('sort') || undefined,
    };

    const after = url.searchParams.get('after') || undefined;

    let items: Item[];
    let totalCount = 0;
    let hasNextPage = false;
    let hasPreviousPage = false;
    let nextCursor: string | undefined;
    let previousCursor: string | undefined;

    try {
      // Fetch live products from Shopify with pagination
      const result = await fetchRingsAdmin(shop, params, 24, after);
      items = convertToItems(result.products);
      totalCount = result.products.length;
      hasNextPage = result.hasNextPage;
      nextCursor = result.endCursor;
      hasPreviousPage = !!after; // If we have an 'after' param, we can go back
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Fallback to static data
      items = fallbackItems;
      totalCount = fallbackItems.length;
      hasNextPage = false;
      hasPreviousPage = false;
    }

    const cards = items.map(card).join("");

    // Build pagination URLs
    const nextUrl = hasNextPage && nextCursor ? buildUrl({...params, after: nextCursor}) : null;
    const prevUrl = hasPreviousPage ? buildUrl({...params, after: undefined}) : null;
  
    const html = `<!doctype html>
  <html lang="en">
  <head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>Ring Builder - Storefront</title>
  ${nextUrl ? `<link rel="next" href="${nextUrl}">` : ''}
  ${prevUrl ? `<link rel="prev" href="${prevUrl}">` : ''}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@12.16.0/build/esm/styles.css">
  <style>
    :root{
      --purple:#3c0c56;--lav:#e9d9f5;--muted:#6b7280;--line:#ececec;--bg:#f8f8f8;
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;width:100%}
    body{font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111;background:#fff}

    /* top band full-width */
    .hero{width:100vw;margin-left:calc(50% - 50vw);background:linear-gradient(180deg,#2a0a4b 0%, #4b1a6c 100%);color:#fff;text-align:center;padding:28px 16px}
    .hero p{margin:0;line-height:1.45;font-family:'Playfair Display', Georgia, serif;font-size:24px}

    /* main wrapper full-width */
    .wrap{width:100vw;margin-left:calc(50% - 50vw);padding:0 24px 40px}
  
    /* shape strip */
    .shapes{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(120px,1fr);gap:16px;padding:16px 0;overflow:auto}
    .pill{border:1px solid var(--line);border-radius:12px;background:#fff;padding:12px 10px;display:flex;flex-direction:column;align-items:center;gap:8px;min-width:120px;cursor:pointer}
    .pill img{height:44px;object-fit:contain}
    .pill.active{outline:2px solid var(--purple);background:var(--lav)}
  
    /* filter row */
    .filters{display:flex;align-items:center;gap:18px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:14px 0;color:#374151}
    .filters .btn{background:#fff;border:0;color:#111;font-size:14px;display:flex;gap:6px;align-items:center;text-decoration:none;cursor:pointer}
    .filters .btn.active{background:var(--lav);color:var(--purple);font-weight:600}
    .filters .sep{height:6px;width:6px;border-radius:50%;background:#d1d5db}
  
    /* grid - responsive */
    .grid{display:grid;gap:28px;margin-top:18px;grid-template-columns:repeat(3,minmax(0,1fr))}
    @media (max-width:980px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media (max-width:640px){.grid{grid-template-columns:1fr}}
  
    .banner{position:relative;border:1px solid var(--line);border-radius:16px;overflow:hidden}
    .banner img{display:block;width:100%;height:100%;object-fit:cover}
    .banner .cap{position:absolute;left:16px;bottom:16px;background:#fff;padding:10px 14px;border-radius:10px;box-shadow:0 6px 20px rgba(0,0,0,.08)}
    .badge{display:inline-flex;gap:6px;align-items:center;background:#2b0a48;color:#fff;border-radius:0 6px 6px 0;padding:6px 10px;margin:12px 0 0 -16px;font-size:12px}
  
    /* card */
    .card{border:1px solid var(--line);border-radius:16px;background:#fff;overflow:hidden;transition:box-shadow .15s,transform .15s}
    .card:hover{box-shadow:0 12px 24px rgba(0,0,0,.08);transform:translateY(-1px)}
    .imgwrap{background:var(--bg);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center}
    .imgwrap img{max-width:90%;max-height:90%}
    .card-body{padding:14px 16px 18px}
    .card-title{font-size:14px;margin:10px 0 4px;text-align:center;font-family:'Poppins',sans-serif}
    .price{color:var(--purple);font-weight:700;text-align:center;margin-bottom:12px;font-family:'Poppins',sans-serif}
    .sep{border:none;border-top:1px solid var(--line);margin:10px 0 12px}
    .row{display:flex;gap:6px;font-size:13px;color:#111;align-items:center;font-family:'Poppins',sans-serif}
    .row .k{font-weight:600}
    .bars{display:flex;gap:10px;align-items:center;margin:10px 0}
    .bar{background:#e5e7eb;border-radius:999px;height:6px;flex:1}
    .bar>span{display:block;height:100%;border-radius:999px;background:#c7b0dd}
    .bar>span.f1{background:#d7c6e7}
    .bar>span.f2{background:#e3d7ef}
    .meta{display:flex;gap:10px;align-items:center;margin-top:10px;justify-content:center}
    .meta-ic{width:18px;height:18px;opacity:.65;filter:grayscale(100%)}
  </style>
  </head>
  <body>
    <div class="hero"><p>Designed with care, perfected with craftsmanship—your<br/>engagement ring is made to be treasured forever.</p></div>
  
    <div class="wrap">
      <div class="shapes">
        ${[
          ["Solitaire","/assets/rings/shape-solitaire.png","Solitaire"],
          ["Oval","/assets/rings/shape-oval.png","Oval"],
          ["Trilogy","/assets/rings/shape-trilogy.png","Trilogy"],
          ["Platinum","/assets/rings/shape-platinum.png","Platinum"],
          ["Diamond Band","/assets/rings/shape-diamondband.png","Diamond Band"],
          ["Halo","/assets/rings/shape-halo.png","Halo"],
          ["Round","/assets/rings/shape-round.png","Round"],
          ["Toi et Moi","/assets/rings/shape-toietmoi.png","Toi et Moi"],
          ["Emerald Cut","/assets/rings/shape-emerald.png","Emerald"]
        ].map(([label,src,shapeValue])=>`
          <a href="${buildUrl({...params, shape: params.shape === shapeValue ? undefined : shapeValue})}" class="pill ${params.shape === shapeValue ? 'active' : ''}">
            <img src="${src}" alt="${label}" loading="lazy"/>
            <div style="font-size:13px">${label}</div>
          </a>`).join("")}
      </div>
  
      <div class="filters">
        <a href="${buildUrl({...params, metal: params.metal === 'Rose Gold' ? undefined : 'Rose Gold'})}" class="btn ${params.metal === 'Rose Gold' ? 'active' : ''}">Metal</a><span class="sep"></span>
        <a href="${buildUrl({...params, metal: params.metal === 'Yellow Gold' ? undefined : 'Yellow Gold'})}" class="btn ${params.metal === 'Yellow Gold' ? 'active' : ''}">Style</a><span class="sep"></span>
        <a href="${buildUrl({...params, metal: params.metal === 'White Gold' ? undefined : 'White Gold'})}" class="btn ${params.metal === 'White Gold' ? 'active' : ''}">Shape</a><span class="sep"></span>
        <a href="${buildUrl({...params, caratMin: params.caratMin === 1 ? undefined : 1})}" class="btn ${params.caratMin === 1 ? 'active' : ''}">Carat Weight</a><span class="sep"></span>
        <button class="btn">Advance Property ▾</button>
        <div style="margin-left:auto;display:flex;gap:14px;align-items:center">
          <a href="${buildUrl({...params, quickship: params.quickship ? undefined : true})}" style="font-size:14px;display:flex;gap:8px;align-items:center;text-decoration:none;color:inherit">
            <span style="width:12px;height:12px;border:2px solid ${params.quickship ? '#c4a7e7' : '#e5e7eb'};border-radius:50%;display:inline-block;background:${params.quickship ? '#c4a7e7' : 'transparent'}"></span> Quickship
          </a>
          <span style="color:#6b7280">Sort :</span>
          <select onchange="window.location.href='${buildUrl({...params, sort: ''})}' + (this.value ? '&sort=' + this.value : '')" style="border:none;background:none;font-weight:bold;cursor:pointer">
            <option value="" ${!params.sort ? 'selected' : ''}>Popular</option>
            <option value="price_asc" ${params.sort === 'price_asc' ? 'selected' : ''}>Price ↑</option>
            <option value="price_desc" ${params.sort === 'price_desc' ? 'selected' : ''}>Price ↓</option>
          </select>
          <span style="opacity:.7">☰</span><span style="opacity:.7">▦</span>
        </div>
      </div>
  
      <div class="badge">★ Best Seller</div>
  
      <section class="grid">
        ${cards}
        <!-- right column banner (place anywhere in grid for 2nd row) -->
        <div class="banner">
          <img src="/assets/banners/warranty.png" alt="Lifetime Warranty" />
          <div class="cap">
            <div style="font-weight:700;margin-bottom:4px">Lifetime Warranty</div>
            <div style="font-size:13px;color:#4b5563;margin-bottom:8px">Peace of mind, for a lifetime.</div>
            <a href="#" style="display:inline-block;border:1px solid #e5e7eb;padding:8px 12px;border-radius:10px;color:#111;text-decoration:none">Learn More</a>
          </div>
        </div>
      </section>
      
      <!-- Results count and pagination -->
      <div style="margin-top:24px;text-align:center;color:#6b7280;font-size:14px">
        Showing ${items.length} of ${totalCount} rings
        ${Object.values(params).some(v => v !== undefined) ? `<a href="${buildUrl({})}" style="margin-left:12px;color:var(--purple);text-decoration:none">Clear filters</a>` : ''}
      </div>
      
      <!-- Pagination -->
      ${hasNextPage || hasPreviousPage ? `
      <div style="margin-top:32px;display:flex;justify-content:center;gap:16px;align-items:center">
        ${hasPreviousPage ? `
          <a href="${prevUrl}" style="display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border:1px solid var(--line);border-radius:8px;background:#fff;color:#111;text-decoration:none;font-size:14px;font-weight:500;transition:all 0.15s">
            ← Previous
          </a>
        ` : ''}
        
        ${hasNextPage ? `
          <a href="${nextUrl}" style="display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border:1px solid var(--purple);border-radius:8px;background:var(--purple);color:#fff;text-decoration:none;font-size:14px;font-weight:500;transition:all 0.15s">
            Next →
          </a>
        ` : ''}
      </div>
      ` : ''}
    </div>
  </body>
  </html>`;
  
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Security-Policy":
          "frame-ancestors https://*.myshopify.com https://admin.shopify.com;",
        "X-Frame-Options": "ALLOWALL",
        "Cache-Control": "s-maxage=30, stale-while-revalidate=120",
      },
    });
  }
