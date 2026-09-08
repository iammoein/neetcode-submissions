class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operators = {
            plus: (a: number, b: number) => b + a,
            mines: (a: number, b: number) => b - a,
            multi: (a: number, b: number) => b * a,
            devide: (a: number, b: number) => b / a,
        };

        type Operator = keyof typeof operators;

        const operatorsMap = new Map<string, Operator>([
            ["+", "plus"],
            ["-", "mines"],
            ["*", "multi"],
            ["/", "devide"],
        ]);

        const arr: number[] = [];

        for (let token of tokens) {
            if (operatorsMap.has(token)) {
                const operator = operatorsMap.get(token);

                if (operator) {
                    const a = arr.pop()!;
                    const b = arr.pop()!;
                    arr.push(Math.trunc(operators[operator](a, b)));
                }
            } else {
                arr.push(Number(token));
            }
        }
        return arr[0];
    }
}
