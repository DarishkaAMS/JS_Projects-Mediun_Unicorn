// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:
// 1) Each row must contain the digits 1-9 without repetition.
// 2) Each column must contain the digits 1-9 without repetition.
// 3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

function main(obj) {
  let rows = [];
  let columns = [];
  let boxes = []; 

  for (let i = 0; i < obj.length; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
}

  for (let i = 0; i < obj.length; i++) { 
    for (let j = 0; j < obj.length; j++) {

      let cell = obj[i][j];

      if(cell !== ".") {
        if (rows[i].includes(cell)) {
          // console.log(rows[i].includes(cell), "false1")
          return false
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          // console.log(columns[j].includes(cell), "false2")
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          // console.log(boxes[boxIndex].includes(cell), "false3")
          return false;
        } else boxes[boxIndex].push(cell);
      }
    }
  } 
  // console.log(true, "Final True")
  return true;
}

module.exports = main;