// Server-side ring product fetching from Shopify Admin GraphQL
import { unauthenticated } from "~/shopify.server";

export type RingFilters = {
  shape?: string;
  metal?: string;
  priceMin?: number;
  priceMax?: number;
  caratMin?: number;
  caratMax?: number;
  quickship?: boolean;
  sort?: string;
};

export type RingProduct = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  metal: string;
  shape: string;
  bars: [number, number, number];
  icons: string[];
};

export function buildProductQuery(filters: RingFilters): string {
  const conditions: string[] = ["product_type:'Ring'"];
  
  // Shape filter
  if (filters.shape) {
    conditions.push(`tag:'shape:${filters.shape.toLowerCase()}'`);
  }
  
  // Metal filter
  if (filters.metal) {
    conditions.push(`tag:'metal:${filters.metal.toLowerCase().replace(' ', '-')}'`);
  }
  
  // Price range
  if (filters.priceMin !== undefined) {
    conditions.push(`variants.price:>=${filters.priceMin}`);
  }
  if (filters.priceMax !== undefined) {
    conditions.push(`variants.price:<=${filters.priceMax}`);
  }
  
  // Carat range (using tags)
  if (filters.caratMin !== undefined) {
    conditions.push(`tag:'carat:>=${filters.caratMin}'`);
  }
  if (filters.caratMax !== undefined) {
    conditions.push(`tag:'carat:<=${filters.caratMax}'`);
  }
  
  // Quickship filter
  if (filters.quickship) {
    conditions.push(`tag:'quickship'`);
  }
  
  return conditions.join(' AND ');
}

export function getSortKey(sort?: string): string {
  switch (sort) {
    case 'price_asc': return 'PRICE';
    case 'price_desc': return 'PRICE';
    default: return 'RELEVANCE';
  }
}

export function getSortDirection(sort?: string): string {
  switch (sort) {
    case 'price_asc': return 'ASC';
    case 'price_desc': return 'DESC';
    default: return 'DESC';
  }
}

export async function fetchRingsAdmin(
  shop: string, 
  filters: RingFilters, 
  first: number = 24,
  after?: string
): Promise<{ products: RingProduct[]; hasNextPage: boolean; endCursor?: string }> {
  const admin = unauthenticated.admin(shop);
  
  const query = buildProductQuery(filters);
  const sortKey = getSortKey(filters.sort);
  const sortDirection = getSortDirection(filters.sort);
  
  const response = await admin.graphql(`
    query Rings($first: Int!, $query: String, $sortKey: ProductSortKeys, $sortDirection: SortDirection, $after: String) {
      products(first: $first, query: $query, sortKey: $sortKey, sortDirection: $sortDirection, after: $after) {
        edges {
          node {
            id
            title
            tags
            featuredImage {
              url
            }
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `, {
    variables: {
      first,
      query: query || undefined,
      sortKey,
      sortDirection,
      after: after || undefined
    }
  });

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  const products = data.data.products.edges.map((edge: any) => {
    const product = edge.node;
    
    // Extract metal and shape from tags
    const metal = extractFromTags(product.tags, 'metal') || 'Rose Gold';
    const shape = extractFromTags(product.tags, 'shape') || 'Oval';
    
    // Generate random bars for now (could be from metafields later)
    const bars: [number, number, number] = [
      Math.floor(Math.random() * 40) + 30, // 30-70
      Math.floor(Math.random() * 40) + 30, // 30-70
      Math.floor(Math.random() * 40) + 30  // 30-70
    ];
    
    // Generate icons based on product attributes
    const icons = [
      '/assets/icons/cut.png',
      '/assets/icons/shape.png',
      '/assets/icons/cert.png',
      '/assets/icons/clarity.png'
    ];
    
    return {
      id: product.id,
      title: product.title,
      price: parseFloat(product.priceRangeV2.minVariantPrice.amount),
      imageUrl: product.featuredImage?.url || '/assets/rings/placeholder.png',
      metal,
      shape,
      bars,
      icons
    };
  });

  return {
    products,
    hasNextPage: data.data.products.pageInfo.hasNextPage,
    endCursor: data.data.products.pageInfo.endCursor
  };
}

function extractFromTags(tags: string[], prefix: string): string | null {
  const tag = tags.find(t => t.startsWith(`${prefix}:`));
  return tag ? tag.split(':')[1] : null;
}
