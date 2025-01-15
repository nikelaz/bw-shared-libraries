export class CurrencyFormatter {
  numberFormat: Intl.NumberFormat;

  constructor(currency: string) {
    this.numberFormat = Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
    });
  }

  format(input: number) {
    return this.numberFormat.format(input);
  }
}
