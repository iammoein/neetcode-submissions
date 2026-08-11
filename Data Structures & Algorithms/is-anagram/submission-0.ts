class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let lookup: Record<string, number> = {};

        for (let char of s) {
            lookup[char] = (lookup[char] || 0) + 1;
        }

        for (let char of t) {
            if (!lookup[char]) return false;
            else lookup[char]--;
        }

        return true;
    }
}
