import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import { Instagram, PhoneCall } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-[#897366]/20 dark:border-empire-taupe/40 bg-empire-sand/50 dark:bg-empire-midnight w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div className="flex flex-col items-start gap-4">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-[#482A12] dark:text-empire-sand hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300 uppercase"
            >
              KKEmpire
            </LocalizedClientLink>
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kk.empire/?hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#482A12] dark:text-empire-sand hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300" />
              </a>
              <a
                href="https://wa.me/2340000000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <PhoneCall className="w-5 h-5 text-[#482A12] dark:text-empire-sand hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300" />
              </a>
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-[#482A12] dark:text-empire-sand">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2 text-[#897366] dark:text-empire-taupe txt-small"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-[#897366] dark:text-empire-taupe txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-[#482A12] dark:text-empire-sand">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-[#897366] dark:text-empire-taupe txt-small",
                    {
                      "grid-cols-2":
                        (collections?.filter(
                          (c) => c.products && c.products.length > 0
                        )?.length || 0) > 3,
                    }
                  )}
                >
                  {collections
                    ?.filter((c) => c.products && c.products.length > 0)
                    ?.slice(0, 6)
                    .map((c) => (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                          href={`/collections/${c.handle}`}
                        >
                          {c.title}
                        </LocalizedClientLink>
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-[#482A12] dark:text-empire-sand">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-[#897366] dark:text-empire-taupe txt-small">
                <li>
                  <LocalizedClientLink
                    href="/kkservices"
                    className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/customer-service"
                    className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                  >
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/legal/privacy-policy"
                    className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/legal/terms"
                    className="hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors"
                  >
                    Terms of Service
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-[#897366] dark:text-empire-taupe">
          <Text className="txt-compact-small">
            {new Date().getFullYear()} KKEMPIRE Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
