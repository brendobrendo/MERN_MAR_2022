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
    // final output arr
    let outputArr=[];
    for(let i=0; i<arr.length; i++){
        let tempSum=0;
        let tempArr=[];
        // keep track the sum of the values we iterate through the list
        tempSum+=arr[i];
        tempArr.push(arr[i]);
        for(let j=i+1; j<arr.length; j++){
            tempSum+=arr[j];
            // when tempSum <= value we want
            if(tempSum<=k){
                // add curr value to the tempArr
                tempArr.push(arr[j]);
            }
            // when tempSum equals to the value we want
            if(tempSum===k){
                // push the copy of tempArr to the output array
                outputArr.push([...tempArr]);
            }
        }
    }
    return outputArr;
 }
 console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));





function findConsecutiveSums2(arr,target){
    const result = []
    for (let i= 0; i<arr.length;i++){
        let j = i+1
        let sum = arr[i]
        const temp = [arr[i]]

        while (sum <= target){
            if(sum === target){
                result.push([...temp]);
            }
            sum += arr[j]
            temp.push(arr[j])
            j++
        }
    }
    return result
}



console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));