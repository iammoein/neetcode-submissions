class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashmap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (hashmap.has(complement)) {
                return [hashmap.get(complement), i];
            }

            hashmap.set(nums[i], i);
        }

        return [];
    }
}
