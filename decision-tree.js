
let age = 25;
let hasID = true;
let isMember = false;


if (age >= 18 && hasID) {
  console.log("✅ Доступ дозволено: повнолітній з документом");
}


if (age < 18) {
  console.log("❌ Доступ заборонено: неповнолітній");
} else if (!hasID) {
  console.log("❌ Доступ заборонено: немає документа");
} else if (isMember || age >= 60) {
  console.log("🎉 Доступ дозволено: учасник або пенсіонер");
} else {
  console.log("✅ Доступ дозволено: стандартний користувач");
}