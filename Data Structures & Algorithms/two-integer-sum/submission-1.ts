class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashmap: Record<string, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (hashmap[diff] !== undefined) return [hashmap[diff], i];

            hashmap[nums[i]] = i;
        }
        return [];
    }
}
