class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hashmap = new Map<string, string[]>();

        for (let word of strs) {
            const sortedStr = word.split("").sort().join("");

            if (hashmap.has(sortedStr)) {
                hashmap.get(sortedStr)?.push(word);
            } else {
                hashmap.set(sortedStr, [word]);
            }
        }

        return [...hashmap.values()];
    }
}
