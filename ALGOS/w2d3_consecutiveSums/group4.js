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

//while value != k keep adding
// if value == K then break loop 
//start a new while to see if the next one still equals 16 if it does check the one after that
//if it doesnt then nreal

function findConsecutiveSums(arr, k) {
  let outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let tempArr = [];
    let j = i;
    while (sum <= k) {
      sum += arr[j];
      // console.log(sum)
      if (sum == k) {
        tempArr.push(arr[j]);
        //   console.log(tempArr);
        //   console.log("********");
        outputArr.push([...tempArr]);
        // console.log(outputArr)
      } else if (sum < k) {
        tempArr.push(arr[j]);
      } else {
        break;
      }
      j++
    }
  }
  return outputArr;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));