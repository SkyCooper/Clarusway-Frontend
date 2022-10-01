//* JS-CC-08: Sliding Window Maximum
//! This is an interview question asked by Google.
// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

//* For example;
// given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

//* Example 2;
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

const array1 = [10, 5, 2, 7, 8, 7]; //* Output:[10, 7, 8, 8]
const k1 = 3;

const array2 = [1, 3, -1, -3, 5, 3, 6, 7]; //* Output: [3,3,5,5,6,7]
const k2 = 3;

const slidingWindowMax = (array, k) => {
  let arr = [];
  for (let i = 0; i <= array.length - k; i++) {
    arr.push(Math.max(...array.slice(i, i+k)))
  }
  return arr;
};

console.log(slidingWindowMax(array1, k1));
console.log(slidingWindowMax(array2, k2));
