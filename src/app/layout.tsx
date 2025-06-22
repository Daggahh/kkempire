import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { ThemeProvider } from "@lib/hooks/use-theme"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: "%s | KKEmpire",
    default: "KKEmpire - Fashion, Beauty & Hair Services",
  },
  description:
    "Discover KKEmpire - Your one-stop destination for fashion, beauty, and hair services. Featuring KKWears clothing, KK.Hairs styling, and KK.Beauty services.",
  keywords: [
    "fashion",
    "beauty",
    "hair services",
    "wig installation",
    "braiding",
    "nail tech",
    "barbing",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "KKEmpire",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <ThemeProvider>
          <main className="relative">{props.children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
