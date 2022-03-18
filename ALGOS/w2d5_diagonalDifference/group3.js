/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/


function diagonalDifference(sqrMatrix) { 
  let leftSum=0
  let rightSum=0;
  for(let i=0; i<arr.length; i++){
      leftSum+= arr[i][i];
      rightSum+= arr[i][arr.length-i-1];
  }
  return Math.abs(rightSum-leftSum);
}

function diagonalDifference2(arr) { 
  let leftSum=0, rightSum=0, startInd=0, endInd=arr.length-1;

  while(startInd<=endInd){
      leftSum+= arr[startInd][startInd];
      rightSum+= arr[startInd][endInd-startInd];
      startInd++;
  }

  return Math.abs(rightSum-leftSum);
}