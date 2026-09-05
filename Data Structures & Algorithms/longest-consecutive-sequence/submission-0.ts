class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const setNums = new Set(nums);
        let longest = 0;

        for (const num of nums) {
            if (!setNums.has(num - 1)) {
                let length = 0;
                while (setNums.has(num + length)) {
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
