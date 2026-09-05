class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const setNums = new Set<number>(nums);
        let longest = 0;

        setNums.forEach((num) => {
            if (!setNums.has(num - 1)) {
                let count = 0;
                while (setNums.has(num + count)) {
                    count++;
                }

                longest = Math.max(longest, count);
            }
        });

        return longest;
    }
}
