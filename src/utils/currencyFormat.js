export const currencyFormat = (number) => {
  if (!number) {
    return null;
  }
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
