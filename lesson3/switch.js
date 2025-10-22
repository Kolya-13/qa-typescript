

let age = 45;


switch (true) {
  case (age < 0):
    console.log("Некоректний вік.");
    break;
  case (age < 6):
    console.log("Малюк.");
    break;
  case (age < 18):
    console.log("Школяр.");
    break;
  case (age < 25):
    console.log("Студент.");
    break;
  case (age < 60):
    console.log("Дорослий.");
    break;
  case (age >= 60):
    console.log(" Пенсіонер.");
    break;
  default:
    console.log(" Невідомий вік.");
    
}