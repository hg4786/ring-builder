// app/routes/proxy.health.ts
export async function loader() {
  return new Response("OK", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Security-Policy": "frame-ancestors https://*.myshopify.com https://admin.shopify.com;",
      "X-Frame-Options": "ALLOWALL",
    },
  });
}
