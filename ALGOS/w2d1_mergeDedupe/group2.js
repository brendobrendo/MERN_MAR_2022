// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let outputArray = [];
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]) {
            if (arr1[idx1] != outputArray[outputArray.length-1]){
                outputArray.push(arr1[idx1]);
            }
            idx1++;
        }
        else if (arr1[idx1] > arr2[idx2]) {
            if (arr2[idx2] != outputArray[outputArray.length-1]){
                outputArray.push(arr2[idx2]);
            }
            idx2++;
        }
        else {
            if (arr1[idx1] != outputArray[outputArray.length-1]){
                outputArray.push(arr1[idx1]);
            }
            idx1++;
            idx2++;
        }
    }

    while (idx1 < arr1.length){
        if (arr1[idx1] != outputArray[outputArray.length-1]){
            outputArray.push(arr1[idx1]);
        }
        idx1++;
    }

    while (idx2 < arr2.length){
        if (arr2[idx2] != outputArray[outputArray.length-1]){
            outputArray.push(arr2[idx2]);
        }
        idx2++;
    }
    return outputArray;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]

console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]));
console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]));