import { Metadata } from "next"
import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Sign in | KKEMPIRE",
  description:
    "Sign in to your KKEMPIRE account to access exclusive products and beauty services.",
}

export default function Login() {
  return <LoginTemplate />
}
