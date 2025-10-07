export async function loader() {
  const assets = [
    "/assets/rings/rose-1.png",
    "/assets/rings/yellow-1.png",
    "/assets/rings/white-1.png",
    "/assets/icons/cut.png",
    "/assets/icons/shape.png",
  ];

  const list = assets
    .map(
      (src, i) => `
      <li>
        <a href="${src}" target="_blank" rel="noopener noreferrer">${src}</a>
        <span id="badge-${i}" class="badge">…</span>
        <div class="preview"><img id="img-${i}" src="${src}" alt="${src}" loading="eager" /></div>
      </li>`
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title id="page-title">Assets OK</title>
  <style>
    html, body { margin: 0; padding: 0; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; }
    .wrap { padding: 16px; }
    h1 { margin: 0 0 12px; font-size: 18px; color: #dc2626; }
    h1.ok { color: #16a34a; }
    ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
    li { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px; display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; }
    .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 12px; background: #e5e7eb; color: #111; }
    .badge.ok { background: #dcfce7; color: #14532d; }
    .badge.err { background: #fee2e2; color: #7f1d1d; }
    .preview { grid-column: 1 / -1; background: #f8fafc; border: 1px dashed #e5e7eb; border-radius: 8px; padding: 8px; display:flex; align-items:center; justify-content:flex-start; }
    .preview img { max-height: 80px; max-width: 240px; object-fit: contain; display: block; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1 id="h1">Assets OK</h1>
    <ul>
      ${list}
    </ul>
  </div>

  <script>
    (function(){
      var okCount = 0;
      var total = ${assets.length};
      function mark(id, isOk){
        var el = document.getElementById('badge-'+id);
        if(!el) return;
        el.textContent = isOk ? '200' : '404';
        el.classList.remove('ok','err');
        el.classList.add(isOk ? 'ok' : 'err');
        if(isOk){ okCount++; }
        if(okCount === total){
          document.getElementById('h1').classList.add('ok');
        }
      }
      for(var i=0;i<total;i++){
        (function(idx){
          var img = document.getElementById('img-'+idx);
          if(!img) return;
          img.onload = function(){ mark(idx, true); };
          img.onerror = function(){ mark(idx, false); };
        })(i);
      }
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors https://*.myshopify.com https://admin.shopify.com;",
      "X-Frame-Options": "ALLOWALL",
    },
  });
}
