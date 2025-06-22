"use client"

import { isManual, isPaystack, isStripe } from "@lib/constants"
import { placeOrder } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useRef, useState } from "react"
import ErrorMessage from "../error-message"
import Paystack from "@paystack/inline-js"

type PaymentButtonProps = {
  cart: HttpTypes.StoreCart
  "data-testid": string
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    (cart.shipping_methods?.length ?? 0) < 1

  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === "pending"
  )

  switch (true) {
    case isStripe(paymentSession?.provider_id):
      return (
        <StripePaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    case isManual(paymentSession?.provider_id):
      return (
        <ManualTestPaymentButton notReady={notReady} data-testid={dataTestId} />
      )
    case isPaystack(paymentSession?.provider_id):
      return (
        <PaystackPaymentButton
          notReady={notReady}
          session={paymentSession}
          data-testid={dataTestId}
        />
      )
    default:
      return <Button disabled>Select a payment method</Button>
  }
}

const StripePaymentButton = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}: {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("card")

  const session = cart.payment_collection?.payment_sessions?.find(
    (s) => s.status === "pending"
  )

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session?.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address?.first_name +
              " " +
              cart.billing_address?.last_name,
            address: {
              city: cart.billing_address?.city ?? undefined,
              country: cart.billing_address?.country_code ?? undefined,
              line1: cart.billing_address?.address_1 ?? undefined,
              line2: cart.billing_address?.address_2 ?? undefined,
              postal_code: cart.billing_address?.postal_code ?? undefined,
              state: cart.billing_address?.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address?.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message || null)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
  }

  return (
    <>
      <Button
        disabled={disabled || notReady}
        onClick={handlePayment}
        size="large"
        isLoading={submitting}
        data-testid={dataTestId}
        className="bg-empire-gold text-white hover:bg-empire-brown disabled:bg-empire-taupe"
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="stripe-payment-error-message"
      />
    </>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    await placeOrder()
      .catch((err) => {
        setErrorMessage(err.message)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size="large"
        data-testid="submit-order-button"
        className="bg-empire-gold text-white hover:bg-empire-brown disabled:bg-empire-taupe"
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="manual-payment-error-message"
      />
    </>
  )
}

const PaystackPaymentButton = ({
  session,
  notReady,
  "data-testid": dataTestId,
}: {
  session: HttpTypes.StorePaymentSession | undefined
  notReady: boolean
  "data-testid"?: string
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const paystackRef = useRef<Paystack | null>(null)

  // Debug: Log the payment session object
  console.log("Paystack payment session:", session)

  // If the session is not ready, we don't want to render the button
  if (notReady || !session) return null

  // Get the accessCode added to the session data by the Paystack plugin
  const { paystackTxAccessCode: accessCode } = session.data

  // This explicit type check will fix the error and prevent runtime issues.
  if (typeof accessCode !== "string") {
    return (
      <Button disabled className="bg-empire-taupe text-white">
        Payment session not ready
      </Button>
    )
  }

  const handlePayment = () => {
    setSubmitting(true)
    setErrorMessage(null)

    if (!paystackRef.current) {
      paystackRef.current = new Paystack()
    }

    const paystack = paystackRef.current

    paystack.resumeTransaction(accessCode, {
      async onSuccess() {
        // Call Medusa checkout complete here
        await placeOrder()
          .catch((err) => {
            const message =
              err instanceof Error ? err.message : "Could not place order."
            setErrorMessage(message)
          })
          .finally(() => {
            setSubmitting(false)
          })
      },
      onError(error: unknown) {
        const message =
          error instanceof Error ? error.message : "Payment failed"
        setErrorMessage(message)
        setSubmitting(false)
      },
      onClose: () => {
        setSubmitting(false) // Handle case where user closes the popup
      },
    })
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        size="large"
        data-testid={dataTestId}
        className="bg-empire-gold text-white hover:bg-empire-brown disabled:bg-empire-taupe"
      >
        Pay with Paystack
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="paystack-payment-error-message"
      />
    </>
  )
}

export default PaymentButton
