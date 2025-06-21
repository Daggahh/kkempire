import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"
import React from "react"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem]">Cart</Heading>
      </div>
      <div
        className="w-full max-w-[900px] mx-auto"
        style={{ background: "var(--table-bg, #fff)", borderRadius: 12 }}
      >
        <div className="relative">
          {/* Force light theme for table, override dark mode */}
          <div className="[color-scheme:light] dark:bg-white dark:text-black rounded-xl overflow-x-auto">
            <Table className="min-w-[700px] w-full dark:bg-empire-midnight">
              <Table.Header className="border-t-0">
                <Table.Row className="text-ui-fg-subtle txt-medium-plus">
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell className="hidden small:table-cell">
                    Price
                  </Table.HeaderCell>
                  <Table.HeaderCell className="text-right">
                    Total
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items
                  ? items
                      .sort((a, b) => {
                        return (a.created_at ?? "") > (b.created_at ?? "")
                          ? -1
                          : 1
                      })
                      .map((item) => {
                        return (
                          <Item
                            key={item.id}
                            item={item}
                            currencyCode={cart?.currency_code}
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
      </div>
    </div>
  )
}

export default ItemsTemplate
