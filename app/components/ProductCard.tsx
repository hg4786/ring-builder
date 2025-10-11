import { Badge, BlockStack, Box, Button, Card, InlineGrid, InlineStack, Text, Thumbnail, Tooltip } from "@shopify/polaris";
import type { ReactNode } from "react";
import { Icons } from "../assetRegistry";

export type ProductCardProps = {
  id: string;
  title: string;
  priceText: string;
  imageUrl: string;
  isBestSeller?: boolean;
  meta: { metal: string; shape: string };
  meters: { metal: number; setting: number };
  onView?: () => void;
};

export function ProductCard(props: ProductCardProps) {
  const { title, priceText, imageUrl, isBestSeller, meta, meters, onView } = props;

  return (
    <Card>
      <Box padding="300">
        <BlockStack gap="200" align="space-between">
          <BlockStack gap="200">
            <Box minHeight="200px">
              <Thumbnail source={imageUrl} alt={title} size="large" />
            </Box>
            {isBestSeller ? (
              <Badge tone="success" size="small">Best Seller</Badge>
            ) : null}
            <Tooltip content={title} dismissOnMouseOut>
              <Text as="h3" variant="headingSm" truncate>
                {title}
              </Text>
            </Tooltip>
            <Text as="p" variant="bodyMd" tone="subdued">{priceText}</Text>

            <BlockStack gap="150">
              <Box>
                <Box background="bg-surface" borderRadius="150" minHeight="4px">
                  <Box width={`${meters.metal}%`} background="bg-fill-brand" minHeight="4px" borderRadius="150" />
                </Box>
              </Box>
              <Box>
                <Box background="bg-surface" borderRadius="150" minHeight="4px">
                  <Box width={`${meters.setting}%`} background="bg-fill-brand" minHeight="4px" borderRadius="150" />
                </Box>
              </Box>
            </BlockStack>

            <InlineGrid columns={2} gap="150">
              <Text as="span" variant="bodySm">Metal: {meta.metal}</Text>
              <Text as="span" variant="bodySm">Shape: {meta.shape}</Text>
            </InlineGrid>

            <InlineStack gap="200" align="center" blockAlign="center">
              <Thumbnail source={Icons.clarity} alt="Clarity" size="small" />
              <Thumbnail source={Icons.cut} alt="Cut" size="small" />
              <Thumbnail source={Icons.shape} alt="Shape" size="small" />
            </InlineStack>
          </BlockStack>

          <Button fullWidth onClick={onView} accessibilityLabel={`View details for ${title}`}>
            View details
          </Button>
        </BlockStack>
      </Box>
    </Card>
  );
}


