import { ArrowUpRightMini } from "@medusajs/icons"
import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group"
      href={href}
      onClick={onClick}
      {...props}
    >
      <span className="text-empire-gold group-hover:text-empire-brown dark:group-hover:text-empire-sand transition-colors">
        {children}
      </span>
      <ArrowUpRightMini
        className="group-hover:rotate-45 ease-in-out duration-150 text-empire-gold group-hover:text-empire-brown dark:group-hover:text-empire-sand"
        color="currentColor"
      />
    </LocalizedClientLink>
  )
}

export default InteractiveLink
