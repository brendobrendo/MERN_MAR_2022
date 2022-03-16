// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let outputArray = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        let sumArray = [arr[i]];
        console.log(i);
        for (let j = i + 1; j < arr.length; j++) {
            if (sum <= k){
                sum += arr[j];
                sumArray.push(arr[j]);
                if (sum == k){
                    outputArray.push(sumArray.slice());
                    console.log(outputArray);
                }
            }
            else if (sum > k){
                break;
            }
        }
    }
    return outputArray;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));