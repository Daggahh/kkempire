import { Instagram, PhoneCall } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Service | KKEMPIRE",
  description: "Need help? Reach KKEMPIRE on WhatsApp or Instagram.",
}

export default function CustomerService() {
  return (
    <section className="content-container py-24 max-w-4xl mx-auto">
      <div className="bg-empire-sand/50 dark:bg-empire-midnight p-12 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-3xl-semi uppercase text-empire-brown dark:text-empire-sand tracking-wide transition-colors duration-300">
            Customer Service
          </h1>
          <p className="text-base-regular text-empire-taupe dark:text-empire-taupe max-w-2xl transition-colors duration-300">
            Have questions about products or want to book a beauty service?
            We're here to help – chat with us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-empire-gold text-white hover:bg-empire-brown dark:hover:bg-empire-sand transition-colors group focus:ring-2 focus:ring-empire-gold focus:outline-none shadow-md hover:scale-105 duration-200"
            >
              <PhoneCall
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Message on WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/kk.empire/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-empire-gold text-empire-gold hover:bg-empire-gold hover:text-white transition-colors group focus:ring-2 focus:ring-empire-gold focus:outline-none shadow-md hover:scale-105 duration-200"
            >
              <Instagram
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Follow on Instagram</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
            <div className="p-6 rounded-lg bg-empire-sand/10 dark:bg-empire-midnight/50 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl mb-3 text-empire-brown dark:text-empire-sand font-semibold transition-colors duration-300">
                Orders & Shipping
              </h3>
              <p className="text-empire-taupe dark:text-empire-taupe">
                Track your order status or get information about shipping and
                delivery.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-empire-sand/10 dark:bg-empire-midnight/50 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl mb-3 text-empire-brown dark:text-empire-sand font-semibold transition-colors duration-300">
                Returns & Refunds
              </h3>
              <p className="text-empire-taupe dark:text-empire-taupe">
                Learn about our return policy and how to initiate a return.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-empire-sand/10 dark:bg-empire-midnight/50 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-xl mb-3 text-empire-brown dark:text-empire-sand font-semibold transition-colors duration-300">
                Beauty Services
              </h3>
              <p className="text-empire-taupe dark:text-empire-taupe">
                Book or reschedule hair, spa, nail, or barbing appointments.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-empire-sand/20 dark:border-empire-sand/10 text-center">
            <h3 className="text-xl-semi mb-4 text-empire-brown dark:text-empire-sand transition-colors duration-300">
              Business Hours
            </h3>
            <p className="text-empire-taupe dark:text-empire-taupe">
              Monday - Saturday: 9:00 AM - 7:00 PM
              <br />
              Sunday: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
