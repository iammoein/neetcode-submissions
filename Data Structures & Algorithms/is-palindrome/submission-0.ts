class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s
            .toLowerCase()
            .replace(/[^A-Za-z0-9]/g, "")
            .split("");
        let j = str.length - 1;

        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[j]) return false;
            j--;
        }

        return true;
    }
}
