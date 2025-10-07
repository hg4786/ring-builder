import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader(_args: LoaderFunctionArgs) {
  return new Response("OK", { status: 200, headers: { "Content-Type": "text/plain" } });
}
export default function ProxyRoot() { return null; }
