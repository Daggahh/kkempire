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
          transition={{ duration: 0.9 }}
          className="font-heading uppercase text-[#482A12] dark:text-empire-sand text-7xl small:text-9xl md:text-10xl tracking-wider"
        >
          KKEMPIRE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base small:text-lg md:text-xl text-[#897366] dark:text-empire-gold tracking-wide"
        >
          COMING SOON…
        </motion.h2>
      </div>
    </div>
  )
}

export default Hero
