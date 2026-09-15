class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0;
        let j = heights.length - 1;
        let maxHeight = 0;

        while (i <= j) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);
            let multi = width * height;
            maxHeight = Math.max(maxHeight, multi);

            if (heights[i] < heights[j]) {
                i++;
            } else j--;
        }
        return maxHeight;
    }
}
