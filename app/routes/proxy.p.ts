import type { LoaderFunctionArgs } from "@remix-run/node";
import { getRingById, getRelated } from "~/models/rings.mock.server";
import { loader as renderDetail } from "./proxy.p.$id"; // reuse HTML generator

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url, "http://localhost");
  const id = (url.searchParams.get("id") || "").trim();
  if (!id) {
    return new Response("<h1>Not found</h1>", {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  // Proxy to the $id loader by faking params
  return renderDetail({ params: { id } } as any);
}
