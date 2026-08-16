class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const lookup: Record<string, number> = {};

        for (let num of nums) {
            lookup[num] = (lookup[num] || 0) + 1;
        }

        return Object.entries(lookup)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
