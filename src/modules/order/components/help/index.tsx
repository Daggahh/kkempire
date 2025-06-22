import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi text-ui-fg-base dark:text-empire-gold">
        Need help?
      </Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink
              href="/customer-service"
              className="text-ui-fg-interactive dark:text-empire-gold hover:text-ui-fg-interactive-hover dark:hover:text-empire-taupe"
            >
              Contact
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink
              href="/customer-service"
              className="text-ui-fg-interactive dark:text-empire-gold hover:text-ui-fg-interactive-hover dark:hover:text-empire-taupe"
            >
              Returns & Exchanges
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
