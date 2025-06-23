import React from "react"

const FlutterwaveIcon = ({ width = 24, height = 24, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#F5A623" />
    <path
      d="M7 17C9 13 15 13 17 17"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 7C9 11 15 11 17 7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2" fill="#fff" />
  </svg>
)

export default FlutterwaveIcon
