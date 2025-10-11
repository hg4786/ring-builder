import type { MetaFunction } from "@remix-run/node";
import { useMemo, useState } from "react";
import {
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  InlineGrid,
  InlineStack,
  Layout,
  Page,
  Pagination,
  Scrollable,
  Select,
  Text,
  Thumbnail,
} from "@shopify/polaris";
import { Banners, Icons, Rings } from "../assetRegistry";
import { ProductCard } from "../components/ProductCard";
import { WarrantyBanner } from "../components/WarrantyBanner";

export const meta: MetaFunction = () => [{ title: "Product Grid" }];

type ViewMode = "grid" | "list";

const categories = [
  "Solitaire",
  "Oval",
  "Trilogy",
  "Platinum",
  "Diamond Band",
  "Halo",
  "Round",
  "Toi et Moi",
  "Emerald Cut",
] as const;

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest", value: "newest" },
];

const ringImages = Object.values(Rings);

export default function ProductGridPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [page, setPage] = useState(0);

  const products = useMemo(() => {
    const base = Array.from({ length: 36 }).map((_, i) => ({
      id: `p-${i + 1}`,
      title: "Classic Solitaire Ring",
      price: "From $16,570",
      imageUrl: ringImages[i % ringImages.length] ?? ringImages[0],
      bestSeller: i % 5 === 0,
      meta: { metal: "Platinum", shape: "Round" },
      meters: { popularity: 70 - (i % 4) * 10, stock: 40 + (i % 3) * 15 },
    }));
    return base;
  }, []);

  const perPage = 12;
  const totalPages = Math.ceil(products.length / perPage);
  const start = page * perPage;
  const end = start + perPage;
  const pagedProducts = products.slice(start, end);

  const tabIcons = categories.map((label) => {
    const map: Record<string, string> = {
      "Solitaire": Icons.solitaire,
      "Oval": Icons.oval,
      "Trilogy": Icons.trilogy,
      "Platinum": Icons.platinum,
      "Diamond Band": Icons.diamondBand,
      "Halo": Icons.halo,
      "Round": Icons.round,
      "Toi et Moi": Icons.toiEtMoi,
      "Emerald Cut": Icons.emeraldCut,
    };
    return { label, img: map[label] };
  });

  return (
    <Page
      title="Rings"
      subtitle="Explore our selection across styles and metals"
    >
      <Layout>
        <Layout.Section>
          <Card>
            <Box padding="400" background="bg-surface-secondary">
              <BlockStack gap="100">
                <Text as="h2" variant="headingMd">Discover your perfect ring</Text>
                <Text as="p" tone="subdued">Curated styles and premium metals, crafted to last a lifetime.</Text>
              </BlockStack>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card padding="0">
            <Box padding="300">
              <Scrollable shadow horizontal>
                <InlineStack gap="300" blockAlign="center">
                  {tabIcons.map((t, idx) => (
                    <BlockStack key={t.label} gap="100" align="center">
                      <img src={t.img} height={20} width={20} alt="" />
                      <Button
                        pressed={selectedTab === idx}
                        onClick={() => setSelectedTab(idx)}
                        accessibilityLabel={t.label}
                      >
                        {t.label}
                      </Button>
                    </BlockStack>
                  ))}
                </InlineStack>
              </Scrollable>
            </Box>
            <Box paddingInlineStart="300" paddingInlineEnd="300" paddingBlockEnd="200">
              <InlineStack align="space-between" blockAlign="center" gap="200">
                <InlineStack gap="200" blockAlign="center">
                  <Badge tone="info">Quickship</Badge>
                </InlineStack>
                <InlineStack gap="200" blockAlign="center">
                  <Select
                    labelHidden
                    label="Sort"
                    options={[
                      { label: "Featured", value: "featured" },
                      { label: "Price ↑", value: "price_asc" },
                      { label: "Price ↓", value: "price_desc" },
                    ]}
                    value={sortBy}
                    onChange={setSortBy}
                  />
                  <InlineStack gap="200">
                    <Button
                      pressed={viewMode === "grid"}
                      onClick={() => setViewMode("grid")}
                      accessibilityLabel="Grid view"
                    >
                      Grid
                    </Button>
                    <Button
                      pressed={viewMode === "list"}
                      onClick={() => setViewMode("list")}
                      accessibilityLabel="List view"
                    >
                      List
                    </Button>
                  </InlineStack>
                </InlineStack>
              </InlineStack>
            </Box>
          </Card>

          <Box paddingBlockStart="400" />

          <Layout>
            <Layout.Section>
              {viewMode === "grid" ? (
                <InlineGrid columns={{ xs: 1, sm: 2, md: 3 }} gap="400">
                  {pagedProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      id={p.id}
                      title={p.title}
                      priceText={p.price}
                      imageUrl={p.imageUrl}
                      isBestSeller={p.bestSeller}
                      meta={p.meta}
                      meters={{ metal: p.meters.popularity, setting: p.meters.stock }}
                      onView={() => {}}
                    />
                  ))}
                </InlineGrid>
              ) : (
                <BlockStack gap="400">
                  {pagedProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      id={p.id}
                      title={p.title}
                      priceText={p.price}
                      imageUrl={p.imageUrl}
                      isBestSeller={p.bestSeller}
                      meta={p.meta}
                      meters={{ metal: p.meters.popularity, setting: p.meters.stock }}
                      onView={() => {}}
                    />
                  ))}
                </BlockStack>
              )}

              <Box paddingBlockStart="400" />
              <Pagination
                hasPrevious={page > 0}
                onPrevious={() => setPage((p) => Math.max(0, p - 1))}
                hasNext={page < totalPages - 1}
                onNext={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              />
            </Layout.Section>

            <Layout.Section variant="oneThird">
              <WarrantyBanner />
            </Layout.Section>
          </Layout>
        </Layout.Section>
      </Layout>
    </Page>
  );
}


