const sumArray = (arr) => {
    return arr.reduce((acc, val) => {
        const num = Number(val);
        return !isNaN(num) ? acc + num : acc;
    }, 0);
};


const numberArray = [10, 20, 30, 40];


const stringArray = ["5", "15", "25", "hello"];


const resultNumbers = sumArray(numberArray);
console.log("Сума чисел (arrow):", resultNumbers);


const resultStrings = sumArray(stringArray);
console.log("Сума рядків (arrow):", resultStrings);