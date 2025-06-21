"use client"

import { useEffect, useState, useTransition } from "react"
import { Search } from "lucide-react"
import Link from "next/link"
import { listProducts } from "@lib/data/products"
import { useParams } from "next/navigation"
import Thumbnail from "@modules/products/components/thumbnail"
import Spinner from "@modules/common/icons/spinner"

const SearchButton = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [isPending, startTransition] = useTransition()
  const { countryCode } = useParams() as { countryCode: string }

  useEffect(() => {
    if (!open) {
      setQuery("")
      setResults([])
      setLoading(false)
      return
    }
    if (query.length < 2) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    startTransition(() => {
      listProducts({
        countryCode,
        queryParams: { limit: 30 },
      })
        .then(({ response }) => {
          // Client-side filter by title
          setResults(
            response.products.filter((p) =>
              p.title.toLowerCase().includes(query.toLowerCase())
            )
          )
        })
        .finally(() => setLoading(false))
    })
  }, [query, open, countryCode])

  return (
    <>
      <button
        aria-label="Open search"
        className="flex items-center justify-center w-8 h-8 text-[#482A12] hover:text-[#D49D5D] dark:text-empire-midnight dark:hover:text-empire-gold transition-colors duration-300 focus:outline-none"
        onClick={() => setOpen(true)}
      >
        <Search size={20} />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-empire-sand dark:bg-empire-midnight rounded-xl shadow-lg p-8 w-full max-w-xl md:max-w-2xl relative flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-empire-gold hover:text-empire-brown"
              onClick={() => setOpen(false)}
              aria-label="Close search"
            >
              ×
            </button>
            <input
              autoFocus
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded border border-empire-gold bg-white dark:bg-empire-midnight text-empire-brown dark:text-empire-sand focus:outline-none focus:ring-2 focus:ring-empire-gold"
              onKeyDown={(e) => {
                if (e.key === "Escape") setOpen(false)
              }}
            />
            <div className="mt-2">
              {loading || isPending ? (
                <div className="flex flex-col items-center justify-center gap-2 py-6">
                  <Spinner size={28} color="#D49D5D" />
                  <span className="text-empire-gold animate-pulse">
                    Searching...
                  </span>
                </div>
              ) : query.length < 2 ? (
                <div className="text-center text-empire-brown dark:text-empire-sand opacity-60">
                  Start typing to search products...
                </div>
              ) : results.length === 0 ? (
                <div className="text-center text-empire-brown dark:text-empire-sand opacity-60">
                  No products found.
                </div>
              ) : (
                <ul className="divide-y divide-empire-gold/20">
                  {results.map((product) => {
                    return (
                      <li key={product.id}>
                        <Link
                          href={`/${countryCode}/products/${product.handle}`}
                          className="block px-2 py-3 hover:bg-empire-gold/10 rounded transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <Thumbnail
                                thumbnail={product.thumbnail}
                                images={product.images}
                                size="square"
                                className="h-20 w-20 rounded-lg border border-empire-gold/30 bg-white object-cover"
                              />
                            </div>
                            <div className="flex flex-col justify-center flex-1 min-w-0">
                              <span className="text-empire-brown dark:text-empire-sand font-medium truncate text-sm">
                                {product.title}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchButton
 