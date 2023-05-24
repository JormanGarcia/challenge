import { TFindPairReturn, TPairList } from "../types/utils";

export function findSumablePairs(list: TPairList, result: number) {
  const sumables = new Set();

  const data = list.reduce<TFindPairReturn>((prev, curr) => {
    const matchingNumber = result - curr;

    if (sumables.has(matchingNumber)) {
      console.log(curr, matchingNumber, result);
      return [...prev, [curr, matchingNumber, result]];
    }

    sumables.add(curr);
    return prev;
  }, []);

  return data;
}
