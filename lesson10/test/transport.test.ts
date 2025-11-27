import { expect } from 'chai';
import { Car, Motorcycle, Scooter } from '../src/transport';

describe('Transport Classes (Mocha + Chai)', () => {
    describe('Car', () => {
        let car: Car;

        beforeEach(() => {
            car = new Car('Toyota Camry');
        });

        it('should create a Car instance', () => {
            expect(car).to.be.instanceOf(Car);
        });

        it('should return correct info about the car', () => {
            const info = car.getInfo();
            expect(info).to.be.a('string');
            expect(info).to.equal('Car model: Toyota Camry');
            expect(info).to.include('Toyota Camry');
        });

        it('should have move method', () => {
            expect(car).to.have.property('move');
            expect(car.move).to.be.a('function');
        });

        it('should not throw error when calling move', () => {
            expect(() => car.move()).to.not.throw();
        });
    });

    describe('Motorcycle', () => {
        let motorcycle: Motorcycle;

        beforeEach(() => {
            motorcycle = new Motorcycle('Honda CBR');
        });

        it('should create a Motorcycle instance', () => {
            expect(motorcycle).to.be.instanceOf(Motorcycle);
        });

        it('should return correct info about the motorcycle', () => {
            const info = motorcycle.getInfo();
            expect(info).to.be.a('string');
            expect(info).to.equal('Motorcycle model: Honda CBR');
            expect(info).to.contain('Honda CBR');
        });

        it('should have move method', () => {
            expect(motorcycle).to.have.property('move');
            expect(motorcycle.move).to.be.a('function');
        });

        it('should not throw error when calling move', () => {
            expect(() => motorcycle.move()).to.not.throw();
        });

        it('should return different info than Car', () => {
            const car = new Car('Honda CBR');
            expect(motorcycle.getInfo()).to.not.equal(car.getInfo());
        });
    });

    describe('Scooter', () => {
        let scooter: Scooter;

        beforeEach(() => {
            scooter = new Scooter('Xiaomi Pro 2');
        });

        it('should create a Scooter instance', () => {
            expect(scooter).to.be.instanceOf(Scooter);
        });

        it('should return correct info about the scooter', () => {
            const info = scooter.getInfo();
            expect(info).to.be.a('string');
            expect(info).to.equal('Electric scooter: Xiaomi Pro 2');
            expect(info).to.match(/Electric scooter/);
        });

        it('should have move method', () => {
            expect(scooter).to.have.property('move');
            expect(scooter.move).to.be.a('function');
        });

        it('should not throw error when calling move', () => {
            expect(() => scooter.move()).to.not.throw();
        });

        it('info should include model name', () => {
            const info = scooter.getInfo();
            expect(info).to.include('Xiaomi Pro 2');
        });
    });

    describe('All Transport Classes', () => {
        it('should all have getInfo method', () => {
            const car = new Car('Test Car');
            const motorcycle = new Motorcycle('Test Moto');
            const scooter = new Scooter('Test Scooter');

            expect(car.getInfo()).to.be.a('string').and.not.be.empty;
            expect(motorcycle.getInfo()).to.be.a('string').and.not.be.empty;
            expect(scooter.getInfo()).to.be.a('string').and.not.be.empty;
        });

        it('should all have move method', () => {
            const car = new Car('Test Car');
            const motorcycle = new Motorcycle('Test Moto');
            const scooter = new Scooter('Test Scooter');

            expect(() => {
                car.move();
                motorcycle.move();
                scooter.move();
            }).to.not.throw();
        });
    });
});
