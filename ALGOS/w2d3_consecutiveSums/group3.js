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

/*
    PSEUDO CODE
    init empty Output array
    initialize left and right pointer. l = 0, r = l + 1
    init empty subarray
    while loop( iterate through main array ){
        only increment when 
    }

*/

function findConsecutiveSums(arr, k) {
    let output = [];
    let subArray = [];
    let l = 0;
    let sum = 0;

    while (l < arr.length) {
        let r = l;
        // sum += arr[l];
        // subArray.push(arr[l]);

        while (sum <= k && r < arr.length) {
            if (sum === k) {
                break;
            } else {
                subArray.push(arr[r]);
                sum += arr[r];
                r++;
            }
        }

        console.log(sum);

        if (sum === k) {
            output.push(subArray);
        }

        subArray = [];
        sum = 0;
        l++;
    }

    return output;
}

console.log(findConsecutiveSums([2, 5, 3, 6, 7, 0, 0, 23, 11], 16));
