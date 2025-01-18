export class CurrencyFormatter {
  numberFormat: Intl.NumberFormat;

  constructor(currency: string, locale?: string) {
    this.numberFormat = Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    });
  }

  format(input: number) {
    return this.numberFormat.format(input);
  }
}
