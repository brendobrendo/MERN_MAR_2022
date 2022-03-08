// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates

    1. starting on index 0, compare to index 1
    2. use logic to see if value at index 0 is larger than value at index 1
    3. if index 0 is larger, swap the values
    4. repeat but starting on the 1st index, then iterate thru the whole array
    5. repeat steps 1-4 by the number of indexes
iterate ->loop
*/
//                  v
const nums1 = [5,3,4,2,1];
//              ^
// after 1st : 3,4,2,1,5, i=0
// after 2nd : 3,2,1,4,5, i=1
//after 3rd: 
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){ 
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
}

// call the function and pass nums1, nums2, nums3
console.log("****nums1****")
bubbleSort(nums1)
console.log(nums1)
console.log("****nums2****")
bubbleSort(nums2)
console.log(nums2)
console.log("****nums3****")
bubbleSort(nums3)
console.log(nums3)
