class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let start = 0;
        let end = nums.length - 1;
        let min = Infinity;

        while (start <= end) {
            if (nums[start] >= nums[end]) {
                min = Math.min(min, nums[end]);
                end--;
            } else {
                min = Math.min(min, nums[start]);
                start++;
            }
        }
        return min;
    }
}
