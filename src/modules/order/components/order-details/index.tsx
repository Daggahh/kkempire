import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text className="text-ui-fg-base dark:text-empire-gold">
        We have sent the order confirmation details to{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold dark:text-empire-gold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2 text-ui-fg-subtle dark:text-empire-taupe">
        Order date:{" "}
        <span data-testid="order-date">
          {new Date(order.created_at).toDateString()}
        </span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive dark:text-empire-gold">
        Order number: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <Text className="text-ui-fg-subtle dark:text-empire-taupe">
              Order status:{" "}
              <span
                className="text-ui-fg-subtle dark:text-empire-taupe"
                data-testid="order-status"
              >
                {formatStatus(order.fulfillment_status)}
              </span>
            </Text>
            <Text className="text-ui-fg-subtle dark:text-empire-taupe">
              Payment status:{" "}
              <span
                className="text-ui-fg-subtle dark:text-empire-taupe"
                data-testid="order-payment-status"
              >
                {formatStatus(order.payment_status)}
              </span>
            </Text>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
