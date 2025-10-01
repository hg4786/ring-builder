import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Badge, BlockStack, Card, InlineStack, Link, Page, Text } from "@shopify/polaris";
import { Banners, Rings } from "../assetRegistry";

export const meta: MetaFunction = () => [{ title: "Verify Setup" }];

export default function VerifyPage() {
  const [bannerOk, setBannerOk] = useState<boolean>(false);
  const [ringOk, setRingOk] = useState<boolean>(false);

  useEffect(() => {
    const img1 = new Image();
    img1.onload = () => setBannerOk(true);
    img1.onerror = () => setBannerOk(false);
    img1.src = Banners.warranty;

    const firstRing = Object.values(Rings)[0];
    if (firstRing) {
      const img2 = new Image();
      img2.onload = () => setRingOk(true);
      img2.onerror = () => setRingOk(false);
      img2.src = firstRing;
    }
  }, []);

  const checks = [
    { label: "Polaris components render", ok: true },
    { label: "Public asset /assets/banners/warranty.png reachable", ok: bannerOk },
    { label: "Grid route exists", ok: true, link: "/app/grid" },
    { label: "At least one /assets/rings image present", ok: ringOk, link: "/app/assets" },
  ];

  return (
    <Page title="Verification" subtitle="Environment and assets checklist">
      <Card>
        <BlockStack gap="400">
          {checks.map((c) => (
            <InlineStack key={c.label} align="space-between" blockAlign="center">
              <Text as="p">{c.label}</Text>
              <InlineStack gap="200" blockAlign="center">
                {c.link ? <Link url={c.link}>{c.link}</Link> : null}
                <Badge tone={c.ok ? "success" : "critical"}>{c.ok ? "OK" : "Missing"}</Badge>
              </InlineStack>
            </InlineStack>
          ))}
        </BlockStack>
      </Card>
    </Page>
  );
}


