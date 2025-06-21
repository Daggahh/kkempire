"use client"

import { motion } from "framer-motion"

// Using tailwindcss classes only; Bebas Neue is set in globals as font-heading

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-[#897366]/20 relative bg-empire-sand/50 dark:bg-empire-midnight">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="font-heading uppercase text-[#482A12] dark:text-empire-sand text-7xl small:text-9xl md:text-10xl tracking-wider"
        >
          KKWEARS
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            delay: 0.4,
          }}
          className="text-base small:text-lg md:text-xl text-[#897366] dark:text-empire-gold tracking-wide"
        >
          Premium Urban Fashion. Redefining Style.
        </motion.h2>
      </div>
      {/* Wavy SVG at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 z-0 transition-colors duration-500"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          className="fill-empire-sand dark:fill-empire-taupe"
          fillOpacity="0.5"
        />
        <path
          d="M0,60 C480,20 960,100 1440,60 L1440,80 L0,80 Z"
          className="fill-[#897366] dark:fill-empire-gold"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

export default Hero
