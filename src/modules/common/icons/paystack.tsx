import React from "react"

const Paystack = ({ width = 24, height = 24, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
      fill="#011B33"
    />
    <path
      d="M12.001 8.86c-1.12 0-2.13.435-2.887 1.19a4.02 4.02 0 00-1.19 2.888c0 1.12.435 2.13 1.19 2.887a4.02 4.02 0 002.887 1.19c1.12 0 2.13-.435 2.887-1.19a4.02 4.02 0 001.19-2.887c0-1.12-.435-2.13-1.19-2.888a4.02 4.02 0 00-2.887-1.19zm0 6.622a2.59 2.59 0 01-1.848-.758 2.59 2.59 0 01-.758-1.848c0-.707.27-1.35.758-1.848a2.59 2.59 0 011.848-.758c.707 0 1.35.27 1.848.758a2.59 2.59 0 01.758 1.848 2.59 2.59 0 01-.758 1.848 2.59 2.59 0 01-1.848.758z"
      fill="url(#paint0_linear_1_2)"
    />
    <path
      d="M12.001 4C7.582 4 4 7.582 4 12.001c0 .848.13 1.666.38 2.434a8.01 8.01 0 011.523-2.181A7.97 7.97 0 018.8 9.17a8.01 8.01 0 013.201-1.304 7.97 7.97 0 013.167 1.25 8.01 8.01 0 012.793 8.35c.25-.768.38-1.586.38-2.434C20 7.582 16.418 4 12.001 4z"
      fill="url(#paint1_linear_1_2)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_2"
        x1="12.001"
        y1="8.86"
        x2="12.001"
        y2="17.14"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#B3B3B3" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_2"
        x1="12.001"
        y1="4"
        x2="12.001"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0BB685" />
        <stop offset="1" stopColor="#006442" />
      </linearGradient>
    </defs>
  </svg>
)

export default Paystack
