// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

const nums = [-4,-1,0,3,10]

function sortedSquares(nums: number[]): number[] {
    let result: number[] = [];

    // soulution 1 : using unshifit
    // let left = 0;
    // let right = nums.length - 1;
    // while (left <= right) {
    //     if (Math.abs(nums[left]) > Math.abs(nums[right])) {
    //         result.unshift(nums[left] ** 2);
    //         left++;
    //     } else {
    //         result.unshift(nums[right] ** 2);
    //         right--;
    //     }
    // }
    // return result;

    // solution 2 : using binaryInsertionSort
    nums.forEach(num => { 
        result.push(num ** 2) 
    });
    
    result = binaryInsertionSort(result);
    return result;
};

function binaryInsertionSort<T>(arr: T[]): T[] {
    for (let i = 1; i < arr.length; i++) {
      const selected = arr[i];
      let left = 0;
      let right = i - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (selected < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
  
      for (let j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      arr[left] = selected;
    }
  
    return arr;
}

console.log(sortedSquares(nums));