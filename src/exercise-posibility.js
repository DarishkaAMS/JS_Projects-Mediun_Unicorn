// There is an array numbers of distinct integers, return all the possible permutations.
// You can return the answer in any order.

// Example 1:
// Input: numbers = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: numbers = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: numbers = [1]
// Output: [[1]]


function main(numbers) {
  // Change code below. 
  let permArr = [];
  if (numbers.length === 0) return [];
  if (numbers.length === 1) return [numbers];

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const remainingNums = numbers.slice(0, i).concat(numbers.slice(i + 1));
    const remainingNumsPermuted = main(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      permArr.push(permutedArray);
    }
  }
  return permArr;
}  

module.exports = main;