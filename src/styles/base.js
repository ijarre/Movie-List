export let htmlFontSize = 16
let baselinePX = 20

export const base = (multiplier = 1) => {
  return `${(htmlFontSize / baselinePX) * multiplier}rem`
}
