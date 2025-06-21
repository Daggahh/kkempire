"use client"

import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Table, clx } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart: HttpTypes.StoreCart
}

const ItemsPreviewTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart.items
  const hasOverflow = items && items.length > 4

  return (
    <div
      className={clx("w-full max-w-[900px] mx-auto", {
        "pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]":
          hasOverflow,
      })}
      style={{ background: "var(--table-bg, #fff)", borderRadius: 12 }}
    >
      {/* Force light theme for table, override dark mode */}
      <div className="[color-scheme:light] dark:bg-white dark:text-black rounded-xl overflow-x-auto">
        <Table className="min-w-[700px] w-full">
          <Table.Body data-testid="items-table">
            {items
              ? items
                  .sort((a, b) => {
                    return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                  })
                  .map((item) => {
                    return (
                      <Item
                        key={item.id}
                        item={item}
                        type="preview"
                        currencyCode={cart.currency_code}
                      />
                    )
                  })
              : repeat(5).map((i) => {
                  return <SkeletonLineItem key={i} />
                })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default ItemsPreviewTemplate
