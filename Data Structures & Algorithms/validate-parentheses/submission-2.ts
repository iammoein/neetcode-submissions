class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const hashmap = new Map<string, string>([
            ["(", ")"],
            ["[", "]"],
            ["{", "}"],
        ]);

        const stack: string[] = [];

        for (let char of s) {
            if (hashmap.has(char)) {
                stack.push(char);
            } else {
                if (stack.length === 0 || hashmap.get(stack.pop()!) !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
