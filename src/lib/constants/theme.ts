export const THEME_COLORS = {
  sand: "#CBB6A3",
  taupe: "#897366",
  brown: "#482A12",
  gold: "#D49D5D",
} as const

export type ThemeColor = keyof typeof THEME_COLORS
