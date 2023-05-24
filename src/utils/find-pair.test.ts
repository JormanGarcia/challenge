import { findMatchingPairs } from "./find-pair";

describe("findMatchingPairs", () => {
  test("should find and return valid sumable pairs", () => {
    const list = [2, 4, 5, 3, 6, 8];
    const result = 10;

    const expectedPairs: [number, number, number][] = [
      [6, 4, result],
      [8, 2, result],
    ];

    const pairs = findMatchingPairs(list, result);

    expect(pairs).toEqual(expectedPairs);
  });

  test("should find and return valid sumable pairs", () => {
    const list = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const result = 12;

    const expectedPairs = [
      [12, 0, result],
      [16, -4, result],
      [7, 5, result],
    ];

    const pairs = findMatchingPairs(list, result);

    expect(pairs).toEqual(expectedPairs);
  });

  test("should return an empty array if no sumable pairs exist", () => {
    const list = [1, 2, 3, 4, 5];
    const result = 10;

    const pairs = findMatchingPairs(list, result);

    expect(pairs).toEqual([]);
  });
});
