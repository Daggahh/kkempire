import { clx } from "@medusajs/ui"

const Divider = ({ className }: { className?: string }) => (
  <div
    className={clx(
      "h-px w-full border-b dark:border-empire-sand/20 border-empire-brown/20 mt-1",
      className
    )}
  />
)

export default Divider
