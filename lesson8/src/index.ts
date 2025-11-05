import { Smartphone, PriceComponent } from './abstraction';
import { fetchApiObjects, convertToShortApiObjects } from './api';

// Створення екземплярів класів
const phone = new Smartphone('1', 'iPhone 13', 'black', 25000);
console.log(phone.getInfo()); // iPhone 13 (black) - 25000 грн.

const priceComp = new PriceComponent(9999);
console.log('Ціна компонента:', priceComp.price);

// Маніпуляції з об'єктами через їхні методи
phone.priceComponent.price = 22000;
console.log('Оновлена ціна телефону:', phone.getInfo());

// Приклад роботи з API
fetchApiObjects().then(apiObjects => {
    const shortObjects = convertToShortApiObjects(apiObjects);
    console.log('Короткі обʼєкти:', shortObjects);
});


