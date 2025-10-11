import type { MetaFunction } from "@remix-run/node";
import {
  Page, Layout, Card, Text, BlockStack, Button
} from "@shopify/polaris";

export const meta: MetaFunction = () => [{ title: "Ring Builder • Dashboard" }];

export default function Dashboard() {
  return (
    <Page title="Ring Builder App">
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingLg">
                Welcome 👋
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                Start configuring your Ring Builder. Use Filters to control shapes,
                carat & price ranges.
              </Text>
              <Button url="/app/rings" variant="primary">
                Open Ring Builder
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
