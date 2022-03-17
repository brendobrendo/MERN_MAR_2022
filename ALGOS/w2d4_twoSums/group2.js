// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]
 
function twoSums(arr, target) {
    const returnArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === target - arr[i]) {
                    returnArr.push(i)
                    returnArr.push(j)
                    return returnArr
                }
            }
        }
    }
    return returnArr
}

function twoSumsHash(arr, target) {
    const hash = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            if (!hash.hasOwnProperty(arr[i])){
                hash[arr[i]] = i
            }
            if (hash.hasOwnProperty(target - arr[i]) && hash[target - arr[i]] !== i) {
                return [hash[target - arr[i]], i]
            }
        }
    }
}

console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
