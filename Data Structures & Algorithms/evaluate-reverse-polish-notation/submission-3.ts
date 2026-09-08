class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operatorsMap = new Map<string, (a: number, b: number) => number>([
            ["+", (a: number, b: number) => b + a],
            ["-", (a: number, b: number) => b - a],
            ["*", (a: number, b: number) => b * a],
            ["/", (a: number, b: number) => b / a],
        ]);

        const arr: number[] = [];

        for (let token of tokens) {
            if (operatorsMap.has(token)) {
                const operator = operatorsMap.get(token);

                if (operator) {
                    const a = arr.pop()!;
                    const b = arr.pop()!;
                    arr.push(Math.trunc(operator(a, b)));
                }
            } else {
                arr.push(Number(token));
            }
        }

        return arr[0];
    }
}
