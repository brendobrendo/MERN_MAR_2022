/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3], // arr[0][0],    arr[0][arr.length - 1]
  [4, 5, 6], // arr[1][1],    arr[1][1]
  [9, 8, 9], // arr[2][2],    arr[2][0]
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
const leftDiagSum = 0;
const rightDiagSum = 0;
const leftDiagX = 0;
const rightDiagX = arr[0].length-1;
const leftDiagY = 0;
const rightDiagY = arr[length-1][0];
let i = 0;
while (i < arr.length){
  leftDiagSum += sqrMatrix[leftDiagX, leftDiagY];
  rightDiagSum +=sqrMatrix[rightDiagX, rightDiagY];
  leftDiagX += 1;
  leftDiagY += 1;
  rightDiagX -= 1;
  rightDiagY  -= 1;
  }
  return Math.abs(leftDiagSum - rightDiagSum);
}

function diagonalDifference2(sqrMatrix) 
{
    let LDSum = 0;  //Keep track of the Left Diagonal
    let RDSum = 0;  //Keep Track of the Right Diagonal
    let TopRight = sqrMatrix[0].length-1;   //Get the "Top Right" of the first array so we know how long it is
    for(let i = 0; i < sqrMatrix.length; i++)   
    {
        LDSum += sqrMatrix[i][i]    //LD is equal to the top left moving diagonal down one right one
        //RDSum += sqrMatrix[(sqrMatrix.length-1)-i][i]
        RDSum += sqrMatrix[i][(TopRight)-i] //This starts at the 'top right' and always moves diagonally down left
        console.log("Calculating:",LDSum,RDSum) //Simple console output to see the sums being built
    }
    return Math.abs(LDSum-RDSum)
}

console.log(diagonalDifference2(squareMatrix1))
console.log(diagonalDifference2(squareMatrix2))