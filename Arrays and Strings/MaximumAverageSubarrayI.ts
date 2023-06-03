// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10^5 will be accepted.

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75



const nums = [1,12,-5,-6,50,3];
const k = 4;

function findMaxAverage(nums: number[], k: number): number {
    let curr = 0;
    for (let i = 0; i < k; i++) {
        curr += nums[i];
    }
    console.log(curr);

    let answer = curr;
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k];
        answer = Math.max(answer, curr);
    }

    return answer/k;
};


console.log(findMaxAverage(nums, k));
