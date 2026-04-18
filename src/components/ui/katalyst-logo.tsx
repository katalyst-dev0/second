"use client"

export function KatalystLogo({ width = 220, height = 56 }: { width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 260 56" width={width} height={height} role="img" aria-label="Katalyst">
      <rect x="10" y="4" width="200" height="8" rx="4" fill="#cf2f2f" />
      <text
        x="10"
        y="44"
        fill="#ffffff"
        fontFamily="'Barlow Condensed', sans-serif"
        fontWeight="800"
        fontSize="36"
        letterSpacing="0.08em"
      >
        KATALYST
      </text>
    </svg>
  )
}
