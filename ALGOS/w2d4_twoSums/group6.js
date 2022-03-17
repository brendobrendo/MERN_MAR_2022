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
    for(let p1 = 0; p1 <arr.length-1; p1++){
        let output= [];
        if(arr[p1]< target){
            for(let p2 = p1+1; p2<arr.length; p2++){
                if(arr[p2]< target){
                    if(arr[p1]+arr[p2] == target){
                        // console.log(p1);
                        // console.log(p2);
                        output.push(p1);
                        output.push(p2);
                        // console.log(output);
                        return output
                    }
                }
            }
        }
    }
}
function twoSums2(arr, target) { 
    let r1=0;
    let r2=1;
    let tempArr=[];
    let ind=false;
    while(!ind){
        if(r2==arr.length){
            r1++;
            r2=r1+1;
        }else if(r1==arr.length-1){
            ind=true;
            console.log("can't find twoSum index");
        }
        else{
            if(arr[r1]+arr[r2]==target){
                tempArr.push(r1);
                tempArr.push(r2);
                return tempArr;
            }else{
                r2++
            }
        }
    }
}
function twoSums2(arr, target) { 
    let r1=0;
    let r2=1;
    let tempArr=[];
    let ind=false;
    while(!ind){
        if(r2==arr.length){
            r1++;
            r2=r1+1;
        }else if(r1==arr.length-1){
            ind=true;
            console.log("can't find twoSum index");
        }
        else{
            if(arr[r1]+arr[r2]==target){
                tempArr.push(r1);
                tempArr.push(r2);
                return tempArr;
                
                function twoSums3(arr, target) 
                {
                    for(let i = 0; i <arr.length; i++)
                        if(arr[i] <= target)
                            for(let j = i+1; j < arr.length; j++)
                                if(arr[i]+arr[j] === target)
                                    return [i,j]
                    return null;
                }
            }else{
                r2++
            }
        }
    }
}

function twoSums3(arr, target) 
{
    for(let i = 0; i <arr.length; i++)
        if(arr[i] <= target)
            for(let j = i+1; j < arr.length; j++)
                if(arr[i]+arr[j] === target)
                    return [i,j]
    return null;
}

function twoSums4(arr,target)
{
    let hashmap = {}                        //Create a hashmap
    for (let i =0; i<= arr.length; i++)     //Loop through all elements of the array
    {
        let complement = target - arr[i]    //Create a matching value for to find our target
        if(complement in hashmap)           //if the KEY is in map then return our [index, map[KEY]] 
        {
            return [i, hashmap[complement]]  //map[KEY] is equal to the INDEX we set it to
        }
        hashmap[arr[i]] = i                  //Set a KEY to be equal to index
        console.log("Index:",i,"| Key We've made: ",complement)
    }
}
console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]


 