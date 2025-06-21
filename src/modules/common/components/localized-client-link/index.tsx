"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import React, { useEffect } from "react"

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LoaderOverlay = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in">
    <div className="w-16 h-16 border-4 border-empire-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: any
}) => {
  const { countryCode } = useParams()
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const handleClick = () => {
    setLoading(true)
    props.onClick?.()
    router.push(`/${countryCode}${href}`)
    // Hide loader after a short delay to ensure navigation starts
    setTimeout(() => setLoading(false), 500)
  }

  return (
    <>
      {loading && <LoaderOverlay />}
      <Link href={`/${countryCode}${href}`} {...props} onClick={handleClick}>
        {children}
      </Link>
    </>
  )
}

export default LocalizedClientLink
