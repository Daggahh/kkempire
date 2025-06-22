import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return convertToLocale({
      amount,
      currency_code: order.currency_code,
    })
  }

  return (
    <div>
      <h2 className="text-base-semi text-ui-fg-base dark:text-empire-gold">
        Order Summary
      </h2>
      <div className="text-small-regular text-ui-fg-base dark:text-empire-gold my-2">
        <div className="flex items-center justify-between text-base-regular text-ui-fg-base dark:text-empire-gold mb-2">
          <span>Subtotal</span>
          <span>{getAmount(order.subtotal)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {order.discount_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-ui-fg-subtle dark:text-empire-taupe">
                Discount
              </span>
              <span className="text-empire-gold">
                - {getAmount(order.discount_total)}
              </span>
            </div>
          )}
          {order.gift_card_total > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-ui-fg-subtle dark:text-empire-taupe">
                Discount
              </span>
              <span className="text-empire-gold">
                - {getAmount(order.gift_card_total)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-ui-fg-subtle dark:text-empire-taupe">
              Shipping
            </span>
            <span className="text-ui-fg-subtle dark:text-empire-taupe">
              {getAmount(order.shipping_total)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-ui-fg-subtle dark:text-empire-taupe">
              Taxes
            </span>
            <span className="text-ui-fg-subtle dark:text-empire-taupe">
              {getAmount(order.tax_total)}
            </span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 dark:border-empire-midnight border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-ui-fg-base dark:text-empire-gold mb-2">
          <span>Total</span>
          <span>{getAmount(order.total)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
