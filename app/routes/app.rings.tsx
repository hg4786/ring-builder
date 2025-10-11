import { Page, Layout, Card, Text, InlineGrid, Badge, Box, Button, Thumbnail, InlineStack } from "@shopify/polaris";
import { Rings as RingAssets } from "../assetRegistry";

type RingItem = {
  id: string;
  title: string;
  price: string;
  metal: string;
  shape: string;
  img: string;
  bestSeller?: boolean;
};

const MOCK: RingItem[] = [
  { id: "1", title: "Classic Solitaire Ring", price: "From $16,570", metal: "Rose Gold", shape: "Oval", img: RingAssets.r1, bestSeller: true },
  { id: "2", title: "Classic Solitaire Ring", price: "From $16,570", metal: "Rose Gold", shape: "Oval", img: RingAssets.r2 },
  { id: "3", title: "Classic Solitaire Ring", price: "From $16,570", metal: "Rose Gold", shape: "Oval", img: RingAssets.r3 },
];

export default function Rings() {
  return (
    <Page title="Ring Builder">
      <Layout>
        <Layout.Section variant="oneThird">
          {/* Filter Drawer placeholder — Day 2 me build karenge */}
          <Card>
            <Text as="h2" variant="headingMd">Filters</Text>
            <Text as="p" tone="subdued">Shape, Carat, Price, Cut/Clarity/Color…</Text>
            <Button fullWidth url="#todo" tone="critical" variant="secondary">Clear Filters</Button>
            <Button fullWidth variant="primary">Apply Filters</Button>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneHalf">
          <Card>
            <InlineGrid columns={{xs:1, sm:2, md:3}} gap="400">
              {MOCK.map((item) => (
                <Box key={item.id} borderColor="border" borderWidth="025" borderRadius="300" padding="300">
                  <Box minHeight="160px">
                    <InlineStack align="center" blockAlign="center">
                      <Thumbnail source={item.img} alt={item.title} size="large" />
                    </InlineStack>
                  </Box>

                  <Box paddingBlockStart="200">
                    <Text as="h3" variant="headingSm">{item.title}</Text>
                    <Text as="p" tone="subdued">{item.price}</Text>
                    <Text as="p">Metal: {item.metal}</Text>
                    <Text as="p">Shape: {item.shape}</Text>
                    {item.bestSeller && <Badge tone="success">Best Seller</Badge>}
                  </Box>

                  <Box paddingBlockStart="200">
                    <Button fullWidth>Add to selection</Button>
                  </Box>
                </Box>
              ))}
            </InlineGrid>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
