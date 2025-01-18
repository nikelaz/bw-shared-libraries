import { calculateTotalPages } from '../src/pagination-utils';

describe('calculateTotalPages', () => {
  test('returns 1 when passed 0 items and x per page', () => {
    const items = 0;
    const perPage = [3, 4, 5, 6, 7, 8, 9];

    perPage.forEach(perPageItem => {
      expect(calculateTotalPages(items, perPageItem)).toEqual(1);
    });
  });

  test('returns 1 when passed x items and 0 per page', () => {
    const items = [3, 4, 5, 6, 7, 8, 9];
    const perPage = 0;

    items.forEach(itemNode => {
      expect(calculateTotalPages(itemNode, perPage)).toEqual(1);
    });
  });

  test('returns correct amount of pages', () => {
    const expected = [
      {
        items: 10,
        perPage: 5,
        pages: 2
      },
      {
        items: 11,
        perPage: 5,
        pages: 3
      },
      {
        items: 9,
        perPage: 5,
        pages: 2
      },
      {
        items: 3,
        perPage: 5,
        pages: 1
      },
      {
        items: 3,
        perPage: 3,
        pages: 1
      },
      {
        items: 3,
        perPage: 2,
        pages: 2
      },
      {
        items: 12,
        perPage: 2,
        pages: 6
      }
    ];

    expected.forEach(testNode => {
      expect(calculateTotalPages(testNode.items, testNode.perPage)).toEqual(testNode.pages);
    });
  });
});
