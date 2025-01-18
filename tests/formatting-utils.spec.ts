import { CurrencyFormatter } from '../src/formatting-utils';

describe('CurrencyFormatter', () => {
  test('a new instance is an object which contains a format method', () => {
    const currencyFormatter = new CurrencyFormatter('USD');
    expect(currencyFormatter).toHaveProperty('format');
    expect(currencyFormatter.format).toBeInstanceOf(Function);
  });

  test('formats USD, EUR, JPY, GBP, AUD and CAD correctly for the en-US locale', () => {
    const price = 1250.35;
    const locale = 'en-US'
    const expectedItems = [
      {
        currency: 'USD',
        string: '$1,250.35',
      },
      {
        currency: 'EUR',
        string: '€1,250.35',
      },
      {
        currency: 'JPY',
        string: '¥1,250',
      },
      {
        currency: 'GBP',
        string: '£1,250.35',
      },
      {
        currency: 'AUD',
        string: 'A$1,250.35',
      },
      {
        currency: 'CAD',
        string: 'CA$1,250.35',
      }
    ];

    expectedItems.forEach(item => {
      const formatter = new CurrencyFormatter(item.currency, locale);
      expect(formatter.format(price)).toEqual(item.string);
    });
  });

  test('formats USD, EUR, JPY, GBP, AUD and CAD correctly for the en-GB locale', () => {
    const price = 1250.35;
    const locale = 'en-GB'
    const expectedItems = [
      {
        currency: 'USD',
        string: 'US$1,250.35',
      },
      {
        currency: 'EUR',
        string: '€1,250.35',
      },
      {
        currency: 'JPY',
        string: 'JP¥1,250',
      },
      {
        currency: 'GBP',
        string: '£1,250.35',
      },
      {
        currency: 'AUD',
        string: 'A$1,250.35',
      },
      {
        currency: 'CAD',
        string: 'CA$1,250.35',
      }
    ];

    expectedItems.forEach(item => {
      const formatter = new CurrencyFormatter(item.currency, locale);
      expect(formatter.format(price)).toEqual(item.string);
    });
  });

  test('formats USD, EUR, JPY, GBP, AUD and CAD correctly for the de-DE locale', () => {
    const price = 1250.35;
    const locale = 'de-DE'
    const expectedItems = [
      {
        currency: 'USD',
        string: '1.250,35 $',
      },
      {
        currency: 'EUR',
        string: '1.250,35 €',
      },
      {
        currency: 'JPY',
        string: '1.250 ¥',
      },
      {
        currency: 'GBP',
        string: '1.250,35 £',
      },
      {
        currency: 'AUD',
        string: '1.250,35 AU$',
      },
      {
        currency: 'CAD',
        string: '1.250,35 CA$',
      }
    ];

    expectedItems.forEach(item => {
      const formatter = new CurrencyFormatter(item.currency, locale);
      expect(formatter.format(price)).toEqual(item.string);
    });
  });
});
