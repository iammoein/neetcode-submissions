class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length <= 1) return false;

        let lookup: Record<string, number> = {};

        for (let num of nums) {
            lookup[num] = (lookup[num] || 0) + 1;
        }

        for (let key in lookup) {
            if (lookup[key] >= 2) return true;
        }

        return false;
    }
}
