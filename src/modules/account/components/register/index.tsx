"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6 text-empire-brown dark:text-empire-sand">
        Join the KKempire family
      </h1>
      <p className="text-center text-base-regular text-empire-taupe dark:text-empire-taupe mb-4">
        Create your profile to enjoy exclusive products and beauty services.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-empire-taupe dark:text-empire-taupe text-small-regular mt-6">
          By creating an account, you agree to KKempire&apos;s{" "}
          <LocalizedClientLink
            href="/legal/privacy-policy"
            className="underline text-empire-gold hover:text-empire-brown dark:hover:text-empire-sand transition-colors"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/legal/terms"
            className="underline text-empire-gold hover:text-empire-brown dark:hover:text-empire-sand transition-colors"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton
          className="w-full mt-6 bg-empire-gold hover:bg-empire-brown dark:hover:bg-empire-sand text-white transition-colors"
          data-testid="register-button"
        >
          Register
        </SubmitButton>
      </form>
      <span className="text-center text-empire-taupe dark:text-empire-taupe text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline text-empire-gold hover:text-empire-brown dark:hover:text-empire-sand transition-colors"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
