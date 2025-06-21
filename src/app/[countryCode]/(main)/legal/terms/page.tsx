import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | KKEMPIRE",
  description:
    "Read the terms and conditions for using KKEMPIRE's website and services.",
}

export default function TermsOfService() {
  return (
    <section className="content-container py-24 max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
        <h1 className="text-3xl-semi text-empire-brown dark:text-empire-sand mb-8 uppercase tracking-wide transition-colors duration-300">
          Terms of Service
        </h1>
        <div className="prose dark:prose-invert prose-headings:text-empire-brown dark:prose-headings:text-empire-sand prose-p:text-empire-taupe dark:prose-p:text-empire-taupe prose-a:text-empire-gold hover:prose-a:text-empire-brown dark:hover:prose-a:text-empire-sand prose-a:transition-colors prose-li:text-empire-taupe dark:prose-li:text-empire-taupe transition-colors duration-300">
          <p className="text-lg">
            Welcome to KKEMPIRE! These terms outline the rules and regulations
            for using our website and purchasing our products or booking
            services.
          </p>

          <h2 className="text-2xl mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing this site you accept these terms in full. Do not
            continue to use KKEMPIRE if you do not agree with all the terms and
            conditions stated on this page.
          </p>

          <h2 className="text-2xl mt-8">2. Products & Services</h2>
          <p>
            We offer fashion items under KKWears and beauty services (hair, spa,
            nails, barbing). All purchases and bookings are subject to
            availability.
          </p>

          <h2 className="text-2xl mt-8">3. Payments</h2>
          <p>
            Payments are processed securely. Prices may change without prior
            notice but changes will not affect confirmed orders.
          </p>

          <h2 className="text-2xl mt-8">4. Returns & Refunds</h2>
          <p>
            Please refer to our dedicated Returns Policy for details on
            returning items purchased from KKWears.
          </p>

          <h2 className="text-2xl mt-8">5. Booking Cancellations</h2>
          <p>
            Service appointments can be rescheduled up to 24 hours before the
            scheduled time. Late cancellations may incur a fee.
          </p>

          <h2 className="text-2xl mt-8">6. Contact</h2>
          <p>
            For questions regarding these terms, contact us via{" "}
            <a href="https://wa.me/2340000000000" className="font-medium">
              WhatsApp
            </a>{" "}
            or{" "}
            <a
              href="https://www.instagram.com/kk.empire/"
              className="font-medium"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
