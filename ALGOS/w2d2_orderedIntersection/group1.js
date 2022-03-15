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


// check the arr length
//compare arr1 and arr2 lengths 


function orderedIntersection(sortedA, sortedB) {

  let newArray = []
  let short = []
  let long = []

  if (sortedA.length > sortedB.length) {
    long = sortedA
    short = sortedB
  }
  else {
    long = sortedB
    short = sortedA
  }

  let j = 0

  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[j] && newArray[newArray.length-1] !== long[i]){
      newArray.push(long[i])
    }
    while (long[i] > short[j]){
      j++
      if (long[i] === short[j] && newArray[newArray.length-1] !== long[i]){
        newArray.push(long[i])
      }
    }
  }
  return newArray
}












function orderedIntersection(sortedA, sortedB) {

  if (sortedA.length > sortedB.length) {
    var [arr1, arr2] = [sortedA, sortedB]
  } else {
    var [arr1, arr2] = [sortedB, sortedA]
  }

  let new_arr = []

  for (x = 0; x < arr1.length; x++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[x] == arr2[j]) {
        if (arr1[x] != new_arr[new_arr.length - 1])
          new_arr.push(arr1[x])
      }

    }
  }
  console.log(new_arr)
  return new_arr

}

function orderedIntersection(sortedA, sortedB) {
  const returnArr = []
  let idx = 0
  let idx2 = 0
  while (idx < sortedA.length && idx2 < sortedB.length) {
      if (sortedA[idx] === sortedB[idx2]) {
          if (returnArr[returnArr.length - 1] !== sortedA[idx]) {
              returnArr.push(sortedA[idx])
          }
          idx++
          idx2++
      }
      else if (sortedA[idx] > sortedB[idx2]) {
          idx2++
      }
      else if (sortedA[idx] < sortedB[idx2]) {
          idx++
      }
  }
  return returnArr
}

orderedIntersection(arrA1, arrB1)
orderedIntersection(arrA2, arrB2)
orderedIntersection(arrA3, arrB3)