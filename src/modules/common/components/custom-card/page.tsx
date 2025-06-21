import React from "react"

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[190px] h-[254px] bg-[rgba(217,217,217,0.58)] dark:bg-[rgba(26,18,13,0.8)] border border-white dark:border-[#D49D5D] shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px] rounded-[17px] text-center cursor-pointer transition-all duration-500 flex items-center justify-center select-none font-bold text-black dark:text-[#CBB6A3] hover:border-black dark:hover:border-[#D49D5D] hover:scale-105 active:scale-95 active:rotate-[1.7deg]">
      {children}
    </div>
  )
}

export default Card
