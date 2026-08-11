class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length <= 1) return false;

        let lookup: Record<string, boolean> = {};

        for (let num of nums) {
            if (lookup[num]) return true;
            lookup[num] = true;
        }

        return false;
    }
}
