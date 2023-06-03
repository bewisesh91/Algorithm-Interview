// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let curr = 0;
    let answer = 0;

    // window를 오른쪽으로 확장
    for (let right = 0; right < nums.length; right++) {
        // 0을 만나면 curr을 증가
        if (nums[right] === 0) {
            curr++;
        }
        // curr이 k보다 커지면 window를 왼쪽으로 축소
        while (curr > k) {
            // 0을 만나면 curr을 감소
            if (nums[left] === 0) {
                curr--;
            }
            left++;
        }
        // answer 갱신
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};