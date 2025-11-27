import { Car, Motorcycle, Scooter, startTrip } from "./transport";

const car = new Car("Toyota Camry");
const moto = new Motorcycle("Honda CBR");
const scooter = new Scooter("Xiaomi Pro 2");

startTrip(car);
startTrip(moto);
startTrip(scooter);