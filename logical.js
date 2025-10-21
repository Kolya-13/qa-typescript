


let num = 10;

let str = "10";

let isActive = true;

let empty = null;
let notSet;


console.log("num == str:", num == str);         
console.log("num === str:", num === str);       
console.log("num != str:", num != str);         
console.log("num !== str:", num !== str);       
console.log("num > 5:", num > 5);              
console.log("str < 20:", str < 20);             


console.log("isActive && num > 5:", isActive && num > 5); 
console.log("isActive || num < 5:", isActive || num < 5); 
console.log("!isActive:", !isActive);                     



console.log("empty == null:", empty == null);             
console.log("notSet === undefined:", notSet === undefined); 
console.log("empty === undefined:", empty === undefined); 


console.log("(num > 5 && str === '10'):", (num > 5 && str === "10")); 
console.log("(num < 5 || isActive === false):", (num < 5 || isActive === false));