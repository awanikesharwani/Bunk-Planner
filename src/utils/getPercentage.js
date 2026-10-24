// Returns attendance percentage (0 - 100)
export function getPercentage(attended, total) {
  if(!total||total===0) return 0;
  return (attended / total) * 100;
}
