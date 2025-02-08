export class CurrencyFormatter {
  numberFormat: Intl.NumberFormat | null;
  currency: string;

  constructor(currency: string, locale?: string) {
    this.currency = currency;

    try {
      this.numberFormat = Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
      });
    }
    catch {
      this.numberFormat = null;
    }
  }

  format(input: number) {
    if (this.numberFormat === null) {
      return `${this.currency} ${input}`;
    }

    return this.numberFormat.format(input);
  }
}
