class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
        let i = 0;
        let j = str.length - 1;

        while (j > i) {
            if (str[i] !== str[j]) return false;
            else {
                i++;
                j--;
            }
        }

        return true;
    }
}
