export function formatCurrency(amount) {
  return Number(amount).toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
}
