"use client"

import { convertToLocale } from "@lib/util/money"
import { Tooltip, TooltipProvider } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import React from "react"

type CartTotalsProps = {
  totals: {
    total?: number | null
    subtotal?: number | null
    tax_total?: number | null
    shipping_total?: number | null
    discount_total?: number | null
    gift_card_total?: number | null
    currency_code: string
    shipping_subtotal?: number | null
  }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
  const {
    currency_code,
    total,
    subtotal,
    tax_total,
    discount_total,
    gift_card_total,
    shipping_subtotal,
  } = totals

  const subtotalTooltip =
    totals.shipping_total == null
      ? "Cart total excluding shipping and taxes."
      : "Cart total for your items. Shipping cost is now included in the total amount."

  return (
    <TooltipProvider>
      <div>
        <div className="flex flex-col gap-y-2 txt-medium text-empire-brown">
          <div className="flex items-center justify-between">
            <span className="flex gap-x-1 items-center">
              Subtotal
              <Tooltip content={subtotalTooltip}>
                <InformationCircleSolid color="var(--fg-muted)" />
              </Tooltip>
            </span>

            <span data-testid="cart-subtotal" data-value={subtotal || 0}>
              {convertToLocale({ amount: subtotal ?? 0, currency_code })}
            </span>
          </div>
          {!!discount_total && (
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span
                className="text-empire-gold"
                data-testid="cart-discount"
                data-value={discount_total || 0}
              >
                -{" "}
                {convertToLocale({
                  amount: discount_total ?? 0,
                  currency_code,
                })}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span
              data-testid="cart-shipping"
              data-value={shipping_subtotal || 0}
            >
              {convertToLocale({
                amount: shipping_subtotal ?? 0,
                currency_code,
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="flex gap-x-1 items-center ">Taxes</span>
            <span data-testid="cart-taxes" data-value={tax_total || 0}>
              {convertToLocale({ amount: tax_total ?? 0, currency_code })}
            </span>
          </div>
          {!!gift_card_total && (
            <div className="flex items-center justify-between">
              <span>Gift card</span>
              <span
                className="text-empire-gold"
                data-testid="cart-gift-card-amount"
                data-value={gift_card_total || 0}
              >
                -{" "}
                {convertToLocale({
                  amount: gift_card_total ?? 0,
                  currency_code,
                })}
              </span>
            </div>
          )}
        </div>
        <div className="h-px w-full border-b border-gray-200 my-4" />
        <div className="flex items-center justify-between text-empire-brown dark:text-empire-sand mb-2 txt-medium ">
          <span>Total</span>
          <span
            className="txt-xlarge-plus"
            data-testid="cart-total"
            data-value={total || 0}
          >
            {convertToLocale({ amount: total ?? 0, currency_code })}
          </span>
        </div>
        <div className="h-px w-full border-b border-gray-200 mt-4" />
      </div>
    </TooltipProvider>
  )
}

export default CartTotals
