export function getStatusColor(percentage) {
  if (percentage >= 75) return 'green';
  if (percentage >= 65) return 'orange';
  return 'red';
}