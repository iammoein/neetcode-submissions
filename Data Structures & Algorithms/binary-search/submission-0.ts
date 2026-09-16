class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.binarySearch(nums, target);
    }

    binarySearch(
        nums: number[],
        target: number,
        start: number = 0,
        end: number = nums.length - 1,
    ): number {
        let mid = Math.floor((start + end) / 2);

        if (start > end) return -1;

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            return this.binarySearch(nums, target, start, mid - 1);
        } else {
            return this.binarySearch(nums, target, mid + 1, end);
        }
    }
}
