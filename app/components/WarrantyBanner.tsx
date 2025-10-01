import { Card, Box, BlockStack, Thumbnail, Text, Button } from "@shopify/polaris";
import { Banners } from "../assetRegistry";

export function WarrantyBanner() {
  return (
    <Card>
      <Box padding="300">
        <BlockStack gap="300" align="center">
          <Thumbnail source={Banners.warranty} alt="Lifetime Warranty" size="large" />
          <Text as="h3" variant="headingSm">Lifetime Warranty</Text>
          <Text as="p" variant="bodySm" tone="subdued">Every ring is protected for life. Learn more about coverage and claims.</Text>
          <Button url="#" primary accessibilityLabel="Learn more about lifetime warranty">
            Learn More
          </Button>
        </BlockStack>
      </Box>
    </Card>
  );
}


