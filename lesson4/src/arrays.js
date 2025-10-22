//  Масив рядків
let stringArray = ["QA", "Test", "Bug", "Report"];

//  Масив чисел
let numberArray = [10, 20, 30, 40];

//  Масив булевих значень
let booleanArray = [true, false, true, false];

//  Масив типу any (змішані типи)
let anyArray = [42, "Hello", true, null];

// Перебір stringArray
console.log("Перебір stringArray (forEach):");
stringArray.forEach((item, index) => {
  console.log(`Елемент ${index}: ${item}`);
});

//  Перетворення stringArray (map)
let upperStrings = stringArray.map(str => str.toUpperCase());
console.log("stringArray після map (toUpperCase):", upperStrings);

//  Перебір numberArray
console.log("\nПеребір numberArray (forEach):");
numberArray.forEach(num => {
  console.log(`Число: ${num}`);
});

//  Перетворення numberArray (map)
let doubledNumbers = numberArray.map(num => num * 2);
console.log("numberArray після map (*2):", doubledNumbers);

//  Перебір booleanArray
console.log("\nПеребір booleanArray (forEach):");
booleanArray.forEach((bool, i) => {
  console.log(`Булеве значення ${i}: ${bool}`);
});

// 🔁 Перетворення booleanArray (map)
let invertedBooleans = booleanArray.map(bool => !bool);
console.log("booleanArray після map (!):", invertedBooleans);

// 🔁 Перебір anyArray
console.log("\nПеребір anyArray (forEach):");
anyArray.forEach((value, i) => {
  console.log(`Елемент ${i}: ${value}`);
});

// 🔁 Перетворення anyArray (map)
let typeDescriptions = anyArray.map(value => typeof value);
console.log("Типи елементів anyArray:", typeDescriptions);