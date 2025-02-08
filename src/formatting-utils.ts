export class CurrencyFormatter {
  numberFormat: Intl.NumberFormat;
  currency: string;

  constructor(currency: string, locale?: string) {
    this.currency = currency;
    this.numberFormat = Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    });
  }

  format(input: number) {
    let output;
    try {
      output = this.numberFormat.format(input);
    } catch (error) {
      output = `${this.currency} ${input}`;
    } finally {
      return output;
    }
  }
}
