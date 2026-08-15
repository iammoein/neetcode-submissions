class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let lookup: Record<string, string[]> = {};

        for (const word of strs) {
            const sortedChar = word.split("").sort().join("");

            if (lookup[sortedChar]) {
                lookup[sortedChar].push(word);
            } else {
                lookup[sortedChar] = [word];
            }
        }
        return Object.values(lookup);
    }
}
