export function formatAmount(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function formatPrice(price) {
  return price === 0 ? 'Free' : formatAmount(price)
}
