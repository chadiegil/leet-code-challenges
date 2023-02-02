// Binary search is a search algorithm that finds the index of a target value in a sorted array. A binary search compares the target value to the middle element of the array (rounding to get an integer, in my case using a double bitwise NOT (~), i.e. (~~) shorthand for Math.floor. If they are not equal, the half in which the target cannot lie is discarded, and the search continues on the second half, we again take the middle element to compare with the target value and repeat this until the target value is found, if the search ends with the half remaining empty, it means that the target is not in the array, so we return the last the value is low.!

const nums = [1, 3, 5, 6];
const target = 5;
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] > target) {
      high = --mid;
    } else if (nums[mid] < target) {
      low = ++mid;
    } else return mid;
  }
  return low;
};

console.log(searchInsert(nums, target));
