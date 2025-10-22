
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}


const numberArray = [10, 20, 30, 40];


const stringArray = ["5", "15", "25", "hello"];


const resultNumbers = sumArray(numberArray);
console.log("Сума чисел:", resultNumbers); 


const resultStrings = sumArray(stringArray);
console.log("Сума рядків:", resultStrings);       