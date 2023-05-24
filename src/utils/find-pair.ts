import { TFindPairReturn, TPairList } from "../types/utils";

export function findMatchingPairs(list: TPairList, toMatch: number) {
  const sumables = new Set();

  const data = list.reduce<TFindPairReturn>((prev, curr) => {
    const matchingNumber = toMatch - curr;

    if (sumables.has(matchingNumber)) {
      console.log(curr, matchingNumber, toMatch);
      return [...prev, [curr, matchingNumber, toMatch]];
    }

    sumables.add(curr);
    return prev;
  }, []);

  return data;
}
