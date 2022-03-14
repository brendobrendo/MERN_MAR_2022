// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    const resultArray = []
    let left = 0;
    let right = 0;
    while (arr1[left] !== undefined || arr2[right] !== undefined) {
        if (arr1[left] <= arr2[right] || arr2[right] === undefined) {
            if (resultArray[resultArray.length - 1] !== arr1[left]) {
                resultArray.push(arr1[left])
            }
            left += 1;
        }
        else if (arr2[right] < arr1[left] || arr1[left] === undefined) {
            if (resultArray[resultArray.length - 1] !== arr2[right]) {
                resultArray.push(arr2[right])
            }
            right += 1;
        }
    }
    return resultArray;
}
// try out some other tests

console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]))// [ 1, 3, 4, 5, 8, 10 ]

console.log(mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

