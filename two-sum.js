// Approach
// The way to approach this problem is to iterate over every single item in the array and find difference between target and current number being processed.

// Let’s keep the processed items and their index in a map (nums[i], i), so that every time we calculate the new difference, we quickly check whether that map has that item or not.

// Let’s take 2 and 7 as an example. These are their differences and the order of when they'll be processed:

// 1. 9 - 2 = 7
// 2. 9 - 7 = 2
// First processed is 9 - 2. Since difference is 7, check if there is an element with key 7 in the map. In this case, not yet. But store 2, 0 pair.
// The next pair that will be processed: 9 - 7. Check for existence of 2 in the map. In this case it exists so pull out the assigned index to it and create a resulting array.

// Complexity
// Time complexity: O(n) - worse case, there are no pairs and we iterate over every single item; fetching items from a map is 0(1)

// Space complexity: O(n) - we are using map to store the pairs

const nums = [2, 7, 4, 2, 45, 6];
const target = 9;

// this method use map
const twoSum = (nums, target) => {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }
    mp.set(nums[i], i);
  }
};

// this uses object

var twoSumObject = function (nums, target) {
  const mp = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in mp) return [i, mp[diff]];

    mp[nums[i]] = i;
  }
};

console.log(twoSumObject(nums, target));
