// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let sortedArr = [];
    let leftInd = 0;
    let rightInd = 0;
    
    while(leftInd<arr1.length || rightInd<arr2.length){
        if(arr1[leftInd]==arr2[rightInd]){
            if(sortedArr.length==0 || arr1[leftInd]!=sortedArr[sortedArr.length-1]){
                sortedArr.push(arr1[leftInd]);
            }
            leftInd++;
            rightInd++;
        }else{
            if(arr1[leftInd]<=arr2[rightInd] ){
                if(arr1[leftInd]!=sortedArr[sortedArr.length-1]){
                    sortedArr.push(arr1[leftInd]);
                }
                leftInd++;
            } else{
                if(arr2[rightInd]!=sortedArr[sortedArr.length-1]){
                    sortedArr.push(arr2[rightInd]);
                }
                rightInd++;
            }   
        }
    }
    while(leftInd<arr1.length){
        if(arr1[leftInd]!=sortedArr[sortedArr.length-1]){
            sortedArr.push(arr1[leftInd]);
        }
        leftInd++;
    }
    while(rightInd<arr2.length){
        if(arr2[rightInd]!=sortedArr[sortedArr.length-1]){
            sortedArr.push(arr2[rightInd]);
        }
        rightInd++;
    }
    return sortedArr;

     
 }

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]