// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) { 
    let longerArr=arr1;
    let shortArr=arr2;
    if(arr2.length>arr1.length){
        longerArr=arr2;
        shortArr=arr1;
    }
    let resultArr=[];
    let runnerLong=0;
    let runnerShort=0;

    while(runnerLong<longerArr.length||runnerShort<shortArr.length){
        if(longerArr[runnerLong]>=shortArr[runnerShort]){
            if(!resultArr.includes(shortArr[runnerShort])){
                resultArr.push(shortArr[runnerShort]);
                runnerShort++;
            }
            else if(resultArr.includes(shortArr[runnerShort])){
                runnerShort++;
            }
        }
        else{
            if(!resultArr.includes(longerArr[runnerLong])){
                resultArr.push(longerArr[runnerLong]);
                runnerLong++;
            }
            else if(resultArr.includes(longerArr[runnerLong])){
                runnerLong++;
            }
        }
    }
    return resultArr;

    let longerArr=arr1;
    let shortArr=arr2;
    if(arr2.length>arr1.length){
        longerArr=arr2;
        shortArr=arr1;
    }
    let resultArr=[];
    let runnerLong=0;
    let runnerShort=0;

    while(runnerLong<longerArr.length||runnerShort<shortArr.length){
        if(longerArr[runnerLong]>shortArr[runnerShort]){
            if(!resultArr.includes(shortArr[runnerShort])){
                resultArr.push(shortArr[runnerShort]);
                runnerShort++;
            }
            else if(resultArr.includes(shortArr[runnerShort])){
                runnerShort++;
            }
        }
        else{
            if(!resultArr.includes(longerArr[runnerLong])){
                resultArr.push(longerArr[runnerLong]);
                runnerLong++;
            }
            else if(resultArr.includes(longerArr[runnerLong])){
                runnerLong++;
            }
        }
    }
    return resultArr;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   a -> 
//     [1, 3, 3, 5, 8, 10]
// //   b
//     [1, 3, 4, 5]
console.log(mergeDedupe(arr1,arr2));