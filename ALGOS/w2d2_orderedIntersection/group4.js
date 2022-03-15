/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

 function dedupe(arr) {
  let deduped = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      deduped.push(arr[i]);
    }
  }
  return deduped;
}

function orderedIntersection(sortedA, sortedB) {
  let newArr = [];
  if (sortedA.length > 0 && sortedB.length > 0) {
    for (let i = 0; i < sortedA.length; i++) {
      if (sortedB.includes(sortedA[i])) {
        newArr.push(sortedA[i]);
      }
    }
  }
  return dedupe(newArr);
}

function newFunk(sortedA, sortedB) {
  let short = sortedA;
  let long = sortedB;
  let newArr=[]
  if (sortedA.length > sortedB.length) {
    short = sortedB;
    long = sortedA;
  }
  for(i=0; i<short.length; i++){
    if(long.includes(short[i])){
      if(newArr[newArr.length-1]!==short[i]){newArr.push(short[i])}
    }
  }
  console.log(newArr)
}

newFunk(arrA1, arrB1)