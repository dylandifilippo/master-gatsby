const formatter = Intl.NumberFormat('fr-BE', {
  style: 'currency',
  currency: 'EUR',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
