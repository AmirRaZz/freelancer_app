const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(number: number) {
  const numWithCommas = numberWithCommas(number);
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}

function numberWithCommas(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toPersianNumbers(number: number | string) {
  return number
    .toString()
    .replace(/\d/g, (digit) => farsiDigits[parseInt(digit)]);
}
