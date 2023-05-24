import { TFindPairReturn, TPairList } from "../types/utils";

export function findMatchingPairs(list: TPairList, toMatch: number) {
  const matchingList = new Set();

  const matchingPairs = list.reduce<TFindPairReturn>((prev, curr) => {
    const matchingNumber = toMatch - curr;

    if (matchingList.has(matchingNumber)) {
      console.log(curr, matchingNumber, toMatch);
      return [...prev, [curr, matchingNumber, toMatch]];
    }

    matchingList.add(curr);
    return prev;
  }, []);

  return matchingPairs;
}
