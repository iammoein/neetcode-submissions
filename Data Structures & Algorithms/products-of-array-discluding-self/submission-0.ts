class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result: number[] = [];

        let prefix: number = 1;
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }
        let postfix: number = 1;

        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] *= postfix;
            postfix *= nums[j];
        }

        return result;
    }
}
