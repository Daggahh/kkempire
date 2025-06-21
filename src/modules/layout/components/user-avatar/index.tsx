"use client"

import { retrieveCustomer } from "@lib/data/customer"
import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const UserAvatar = () => {
  const [customer, setCustomer] = useState<HttpTypes.StoreCustomer | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customerData = await retrieveCustomer()
        setCustomer(customerData)
      } catch (error) {
        console.error("Error fetching customer:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCustomer()
  }, [])

  if (loading) {
    return null
  }

  if (!customer) {
    return (
      <LocalizedClientLink
        className="text-[#482A12] dark:text-empire-midnight hover:text-[#D49D5D] dark:hover:text-empire-gold transition-colors duration-300"
        href="/account"
        data-testid="nav-account-link"
      >
        Account
      </LocalizedClientLink>
    )
  }

  const firstName = customer.first_name || customer.email?.split("@")[0] || "U"
  const firstLetter = firstName.charAt(0).toUpperCase()

  return (
    <LocalizedClientLink href="/account" data-testid="nav-account-link">
      <div className="w-8 h-8 rounded-full bg-empire-gold text-empire-brown dark:bg-empire-brown dark:text-empire-gold flex items-center justify-center text-sm font-semibold border border-empire-gold/30">
        {firstLetter}
      </div>
    </LocalizedClientLink>
  )
}

export default UserAvatar
