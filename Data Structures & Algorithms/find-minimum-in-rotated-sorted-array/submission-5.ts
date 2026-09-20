class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let start = 0;
        let end = nums.length - 1;

        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            if (nums[end] < nums[mid]) {
                start = mid + 1
            } else {
               end = mid;
            }
        }

        return nums[start];
    }
}
