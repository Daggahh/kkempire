import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  // Filter out collections with no products
  const collectionsWithProducts = []
  for (const collection of collections) {
    const {
      response: { products },
    } = await import("@lib/data/products").then((m) =>
      m.listProducts({
        regionId: region.id,
        queryParams: { collection_id: collection.id, fields: "id" },
      })
    )
    if (products && products.length > 0) {
      collectionsWithProducts.push(collection)
    }
  }
  return collectionsWithProducts.map((collection, idx) => (
    <li key={collection.id}>
      <ProductRail
        collection={collection}
        region={region}
        isFirst={idx === 0}
      />
    </li>
  ))
}
