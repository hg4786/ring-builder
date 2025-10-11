import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Grid, Page, Text, Thumbnail } from "@shopify/polaris";
import fs from "node:fs";
import path from "node:path";

export const meta: MetaFunction = () => [{ title: "Assets Preview" }];

type AssetItem = { path: string; url: string };

function walk(dir: string, baseUrlPrefix: string, results: AssetItem[] = []): AssetItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, baseUrlPrefix, results);
    } else if (/\.(png|jpe?g|svg|gif|webp)$/i.test(entry.name)) {
      const relFromPublic = path.relative(path.join(dir, "..", "..", ".."), full);
      const relUrl = "/" + relFromPublic.replace(/^public\//, "");
      results.push({ path: relUrl, url: relUrl });
    }
  }
  return results;
}

export async function loader(_args: LoaderFunctionArgs) {
  const publicDir = path.join(process.cwd(), "public", "assets");
  let items: AssetItem[] = [];
  if (fs.existsSync(publicDir)) {
    items = walk(publicDir, "/assets").sort((a, b) => a.path.localeCompare(b.path));
  }
  return json({ items });
}

export default function AssetsPreviewPage() {
  const data = useLoaderData<typeof loader>();
  const files = data.items;

  return (
    <Page title="Assets" subtitle="Preview of all images under /public/assets">
      <Card>
        {files.length === 0 ? (
          <Text as="p" tone="subdued">No assets found under /public/assets</Text>
        ) : (
          <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }} gap={{ xs: "400", sm: "400", md: "400", lg: "400", xl: "400" }}>
            {files.map((f) => (
              <Grid.Cell key={f.path}>
                <Card>
                  <Thumbnail source={f.url} alt={f.path} size="large" />
                  <Text as="p" variant="bodySm" tone="subdued">{f.path}</Text>
                </Card>
              </Grid.Cell>
            ))}
          </Grid>
        )}
      </Card>
    </Page>
  );
}


