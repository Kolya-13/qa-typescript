function sumArray(arr: (number | string)[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

const numberArray: number[] = [10, 20, 30, 40];
const stringArray: string[] = ["5", "15", "25", "hello"];

const resultNumbers = sumArray(numberArray);
console.log("Sun numbers:", resultNumbers);

const resultStrings = sumArray(stringArray);
console.log("Sum numbers in strings:", resultStrings);