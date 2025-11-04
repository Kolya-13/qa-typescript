
const sumArrayArrow = (arr: (number | string)[]): number => {
    return arr.reduce((acc: number, val: number | string) => {
        const num = Number(val);
        return !isNaN(num) ? acc + num : acc;
    }, 0);
};

const numberArrayArrow: number[] = [10, 20, 30, 40];

const stringArrayArrow: string[] = ["5", "15", "25", "hello"];

const resultNumbersArrow = sumArrayArrow(numberArrayArrow);
console.log("Сума чисел (arrow):", resultNumbersArrow);

const resultStringsArrow = sumArrayArrow(stringArrayArrow);
console.log("Сума рядків (arrow):", resultStringsArrow);