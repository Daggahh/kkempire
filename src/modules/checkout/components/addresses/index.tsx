"use client"

import { setAddresses } from "@lib/data/cart"
import compareAddresses from "@lib/util/compare-addresses"
import { CheckCircleSolid } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text, useToggleState } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useActionState } from "react"
import BillingAddress from "../billing_address"
import ErrorMessage from "../error-message"
import ShippingAddress from "../shipping-address"
import { SubmitButton } from "../submit-button"

const Addresses = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "address"

  const { state: sameAsBilling, toggle: toggleSameAsBilling } = useToggleState(
    cart?.shipping_address && cart?.billing_address
      ? compareAddresses(cart?.shipping_address, cart?.billing_address)
      : true
  )

  const handleEdit = () => {
    router.push(pathname + "?step=address")
  }

  const [message, formAction] = useActionState(setAddresses, null)

  return (
    <div className="bg-white dark:bg-empire-dark">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className="flex flex-row text-3xl-regular gap-x-2 items-baseline text-ui-fg-base dark:text-empire-gold"
        >
          Shipping Address
          {!isOpen && <CheckCircleSolid className="text-empire-gold" />}
        </Heading>
        {!isOpen && cart?.shipping_address && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive dark:text-empire-gold hover:text-ui-fg-interactive-hover dark:hover:text-empire-taupe"
              data-testid="edit-address-button"
            >
              Edit
            </button>
          </Text>
        )}
      </div>
      {isOpen ? (
        <form action={formAction}>
          <div className="pb-8">
            <ShippingAddress
              customer={customer}
              checked={sameAsBilling}
              onChange={toggleSameAsBilling}
              cart={cart}
            />

            {!sameAsBilling && (
              <div>
                <Heading
                  level="h2"
                  className="text-3xl-regular gap-x-4 pb-6 pt-8 text-ui-fg-base dark:text-empire-gold"
                >
                  Billing address
                </Heading>

                <BillingAddress cart={cart} />
              </div>
            )}
            <SubmitButton
              className="mt-6 bg-empire-gold hover:bg-empire-taupe text-white dark:bg-empire-gold dark:hover:bg-empire-taupe dark:text-empire-dark"
              data-testid="submit-address-button"
            >
              Continue to delivery
            </SubmitButton>
            <ErrorMessage error={message} data-testid="address-error-message" />
          </div>
        </form>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start gap-x-1 w-full">
                  <div
                    className="flex flex-col w-1/3"
                    data-testid="shipping-address-summary"
                  >
                    <Text className="txt-medium-plus text-ui-fg-base dark:text-empire-gold mb-1">
                      Shipping Address
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </Text>
                  </div>

                  <div
                    className="flex flex-col w-1/3 small:w-1/3"
                    data-testid="shipping-contact-summary"
                  >
                    <Text className="txt-medium-plus text-ui-fg-base dark:text-empire-gold mb-1">
                      Contact
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe truncate small:truncate-none">
                      {cart.shipping_address.phone}
                    </Text>
                    <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe truncate small:truncate-none">
                      {cart.email}
                    </Text>
                  </div>

                  <div
                    className="flex flex-col w-1/3"
                    data-testid="billing-address-summary"
                  >
                    <Text className="txt-medium-plus text-ui-fg-base dark:text-empire-gold mb-1">
                      Billing Address
                    </Text>

                    {sameAsBilling ? (
                      <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                        Billing- and delivery address are the same.
                      </Text>
                    ) : (
                      <>
                        <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                          {cart.billing_address?.first_name}{" "}
                          {cart.billing_address?.last_name}
                        </Text>
                        <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                          {cart.billing_address?.address_1}{" "}
                          {cart.billing_address?.address_2}
                        </Text>
                        <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                          {cart.billing_address?.postal_code},{" "}
                          {cart.billing_address?.city}
                        </Text>
                        <Text className="txt-medium text-ui-fg-subtle dark:text-empire-taupe">
                          {cart.billing_address?.country_code?.toUpperCase()}
                        </Text>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
