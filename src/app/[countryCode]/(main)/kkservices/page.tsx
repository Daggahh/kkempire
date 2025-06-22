"use client"

import {
  ShoppingBag,
  Scissors,
  Sparkles,
  Hand,
  User,
  Instagram,
  MessageCircle,
  Coffee,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Card from "@modules/common/components/custom-card/page"

const brands = [
  {
    name: "@kkwears",
    icon: (
      <ShoppingBag className="w-7 h-7 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Premium ready-to-wear fashion for men and women.",
    link: "https://www.instagram.com/kkwears/",
  },
  {
    name: "@kk.hairs",
    icon: (
      <Scissors className="w-7 h-7 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Professional hair services, wig installations, and braiding.",
    link: "https://www.instagram.com/kk.hairs/",
  },
  {
    name: "@kk.beautty",
    icon: (
      <Sparkles className="w-7 h-7 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Beauty services including nails, and more.",
    link: "https://www.instagram.com/kk.beautty/",
  },
  {
    name: "@kkkafe.ng",
    icon: (
      <Coffee className="w-7 h-7 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "BRUNCH SERVED ALL DAY",
    link: "https://www.instagram.com/kkkafe.ng/",
  },
]

const services = [
  {
    title: "Fashion Sales",
    icon: (
      <ShoppingBag className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Shop the latest in urban fashion and accessories.",
  },
  {
    title: "Hair Services",
    icon: (
      <Scissors className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Wig installation, sew-ins, braiding, and more.",
  },
  {
    title: "Beauty",
    icon: (
      <Sparkles className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "We specialize in professional makeup services for weddings, events, and everyday glam.",
  },
  {
    title: "Nail Tech",
    icon: (
      <Hand className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Professional nail art and care.",
  },
  {
    title: "Barbing",
    icon: (
      <User className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Modern barbing and grooming for men.",
  },
  {
    title: "Cafe & Brunch",
    icon: (
      <Coffee className="w-6 h-6 text-empire-gold group-hover:text-empire-brown transition-colors" />
    ),
    desc: "Delicious brunch served all day with premium coffee.",
  },
]

export default function KKServicesPage() {
  return (
    <main className="min-h-screen bg-empire-sand dark:bg-empire-midnight flex flex-col items-center py-12 px-4">
      <section className="w-full max-w-5xl mx-auto mb-12">
        <h1 className="font-heading text-3xl md:text-5xl text-empire-brown dark:text-empire-gold mb-2 text-center tracking-wider">
          What We Do at KKEmpire
        </h1>
        <p className="text-base md:text-lg text-empire-taupe dark:text-empire-sand mb-8 text-center max-w-2xl mx-auto">
          A Brand that caters for all - Fashion, Beauty, and Lifestyle
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
          {brands.map((brand) => (
            <Card key={brand.name}>
              <div className="flex flex-col items-center justify-center h-full w-full">
                {brand.icon}
                <span className="mt-3 font-semibold text-empire-brown dark:text-empire-gold text-lg">
                  {brand.name}
                </span>
                <span className="text-empire-taupe dark:text-empire-sand text-sm mt-1 text-center">
                  {brand.desc}
                </span>
                <Link
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <button className="flex items-center gap-2 px-4 py-2 rounded bg-empire-gold text-white hover:bg-empire-brown transition-colors text-sm font-medium shadow group-hover:scale-105 group-hover:rotate-1 duration-200 focus:ring-2 focus:ring-empire-gold focus:outline-none">
                    <Instagram
                      size={16}
                      className="transition-transform group-hover:-rotate-12"
                    />{" "}
                    Instagram
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full max-w-5xl mx-auto mb-12">
        <h2 className="font-heading text-2xl md:text-3xl text-empire-brown dark:text-empire-gold mb-6 text-center tracking-wide">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center bg-white/80 dark:bg-empire-brown/80 rounded-xl shadow p-6 border border-empire-gold hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <span className="mt-3 font-semibold text-empire-brown dark:text-empire-gold text-base">
                {service.title}
              </span>
              <span className="text-empire-taupe dark:text-empire-sand text-sm mt-1 text-center mb-2">
                {service.desc}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full max-w-3xl mx-auto text-center mt-8">
        <p className="text-base md:text-lg text-empire-taupe dark:text-empire-sand mb-6">
          Book a service, shop our collection, or get in touch for a
          personalized experience.
        </p>
        <div className="flex gap-6 justify-center mt-4">
          <Link
            href="https://www.instagram.com/kk.empire/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-empire-gold text-white hover:bg-empire-brown transition-colors text-base font-semibold shadow-md focus:ring-2 focus:ring-empire-gold focus:outline-none transform hover:scale-105 duration-200">
              <Instagram
                size={20}
                className="transition-transform group-hover:-rotate-12"
              />{" "}
              Instagram
            </button>
          </Link>
          <Link
            href="https://wa.me/2348100000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-empire-gold text-white hover:bg-empire-brown transition-colors text-base font-semibold shadow-md focus:ring-2 focus:ring-empire-gold focus:outline-none transform hover:scale-105 duration-200">
              <MessageCircle
                size={20}
                className="transition-transform group-hover:rotate-12"
              />{" "}
              WhatsApp
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
