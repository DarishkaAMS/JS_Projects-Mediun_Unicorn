// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function main(nums, target) {
  // Change code below. 
  // console.log(target in nums);

  for (let i = 0; i < nums.length; i++){
    if (nums[i] === target){
      console.log(nums[i]);
      return i
    } else {
      nums.push(target);
      let newNum = nums.sort(function(a, b) { return a - b; });
      console.log(newNum);
      console.log(newNum.indexOf(target));
      return newNum.indexOf(target);
    } 
  }
}

module.exports = main;