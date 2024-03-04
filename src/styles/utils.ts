/**
 * Convert hex color to rgba
 * @param hex Color in hex format
 * @param alpha Opacity (0-1)
 * @returns Color in rgba format
 */
export const hex2rgba = (hex: string, alpha = 1) => {
  const match = hex.match(/\w\w/g)

  if (match) {
    const [r, g, b] = match.map((x) => parseInt(x, 16))
    return `rgba(${r},${g},${b},${alpha})`
  }

  return 'rgba(0,0,0,1)'
}
