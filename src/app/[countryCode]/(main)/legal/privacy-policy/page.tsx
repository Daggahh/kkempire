import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | KKEMPIRE",
  description: "Learn how KKEMPIRE collects, uses and protects your data.",
}

export default function PrivacyPolicy() {
  return (
    <section className="content-container py-24 max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
        <h1 className="text-3xl-semi text-empire-brown dark:text-empire-sand mb-8 uppercase tracking-wide transition-colors duration-300">
          Privacy Policy
        </h1>
        <div className="prose dark:prose-invert prose-headings:text-empire-brown dark:prose-headings:text-empire-sand prose-p:text-empire-taupe dark:prose-p:text-empire-taupe prose-a:text-empire-gold hover:prose-a:text-empire-brown dark:hover:prose-a:text-empire-sand prose-a:transition-colors prose-li:text-empire-taupe dark:prose-li:text-empire-taupe transition-colors duration-300">
          <p className="text-lg">
            This Privacy Policy explains how KKEMPIRE ("we", "us", "our")
            collects, uses, and shares your personal information when you visit
            or make a purchase from our site. By using the site, you agree to
            the terms of this Policy.
          </p>
          <h2 className="text-2xl mt-8">Information We Collect</h2>
          <ul className="space-y-2">
            <li>Contact details such as name, email, phone number</li>
            <li>Shipping and billing addresses</li>
            <li>
              Payment information (processed securely by our payment partner)
            </li>
            <li>Usage data such as pages visited and actions taken</li>
          </ul>
          <h2 className="text-2xl mt-8">How We Use Information</h2>
          <p>
            We use your data to fulfil orders, provide services, improve our
            site, and communicate with you about promotions and updates.
          </p>
          <h2 className="text-2xl mt-8">Cookies</h2>
          <p>
            We use cookies to remember preferences and keep you signed-in. You
            may disable cookies in your browser but some features may not work.
          </p>
          <h2 className="text-2xl mt-8">Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            data at any time by contacting us.
          </p>
          <h2 className="text-2xl mt-8">Contact</h2>
          <p>
            If you have questions about this policy, please reach out on
            Instagram{" "}
            <a
              href="https://www.instagram.com/kk.empire/"
              className="font-medium"
            >
              @kk.empire
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
