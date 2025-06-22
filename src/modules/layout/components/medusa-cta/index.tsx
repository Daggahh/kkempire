import { Text } from "@medusajs/ui"

import NextJs from "../../../common/icons/nextjs"
import { Crown } from "lucide-react"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center text-ui-fg-subtle dark:text-empire-taupe">
      Crafted with
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" className="dark:fill-empire-taupe" />
      </a>
      &
      <a
        href="https://odidi-portfolio.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <Crown
          fill="#9ca3af"
          size={20}
          className="text-[#9ca3af] dark:text-empire-taupe dark:fill-empire-taupe"
        />
      </a>
    </Text>
  )
}

export default MedusaCTA
