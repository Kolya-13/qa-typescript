import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { expect as chaiExpect } from 'chai';
import { Car, Motorcycle, Scooter, startTrip, type Driveable } from '../src/transport';

describe('startTrip Function (Vitest + Chai)', () => {
    let consoleLogSpy: Mock;

    beforeEach(() => {
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    });

    it('should call move and getInfo on vehicle object (Vitest expect)', () => {
        const car = new Car('Test Car');
        const moveSpy = vi.spyOn(car, 'move');
        const getInfoSpy = vi.spyOn(car, 'getInfo');

        startTrip(car);

        expect(moveSpy).toHaveBeenCalled();
        expect(getInfoSpy).toHaveBeenCalled();
        expect(consoleLogSpy).toHaveBeenCalled();
    });

    it('should manipulate Car object correctly (Chai expect)', () => {
        const car = new Car('Toyota Camry');
        chaiExpect(car).to.be.an('object');
        chaiExpect(car).to.have.property('move');
        chaiExpect(car).to.have.property('getInfo');
        startTrip(car);

        chaiExpect(consoleLogSpy.mock.calls.length).to.be.greaterThan(0);
    });

    it('should manipulate Motorcycle object correctly (Chai expect)', () => {
        const motorcycle = new Motorcycle('Honda CBR');

        chaiExpect(motorcycle).to.be.an('object');
        chaiExpect(motorcycle).to.respondTo('move');
        chaiExpect(motorcycle).to.respondTo('getInfo');

        const info = motorcycle.getInfo();
        chaiExpect(info).to.be.a('string');
        chaiExpect(info).to.include('Honda CBR');

        startTrip(motorcycle);

        expect(consoleLogSpy).toHaveBeenCalledWith('=== Trip started ===');
    });

    it('should manipulate Scooter object correctly (Mixed assertions)', () => {
        const scooter = new Scooter('Xiaomi Pro 2');

        chaiExpect(scooter).to.be.an.instanceOf(Scooter);
        chaiExpect(scooter.getInfo()).to.satisfy((info: string) => info.includes('Xiaomi'));

        startTrip(scooter);

        expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('Trip'));
        expect(consoleLogSpy.mock.calls.length).toBeGreaterThanOrEqual(4);
    });

    it('should work with any Driveable object (Chai expect)', () => {
        const mockVehicle: Driveable = {
            move: vi.fn(),
            getInfo: vi.fn().mockReturnValue('Mock Vehicle')
        };

        startTrip(mockVehicle);

        expect(mockVehicle.move).toHaveBeenCalledTimes(1);
        expect(mockVehicle.getInfo).toHaveBeenCalledTimes(1);


        chaiExpect(consoleLogSpy.mock.calls.length).to.be.greaterThan(0);
    });

    it('should call methods in correct order (Vitest expect)', () => {
        const car = new Car('Test Car');
        const callOrder: string[] = [];

        const originalMove = car.move.bind(car);
        const originalGetInfo = car.getInfo.bind(car);

        car.move = vi.fn(() => {
            callOrder.push('move');
            originalMove();
        });

        car.getInfo = vi.fn(() => {
            callOrder.push('getInfo');
            return originalGetInfo();
        });

        startTrip(car);

        expect(callOrder).toContain('getInfo');
        expect(callOrder).toContain('move');
        expect(callOrder.indexOf('getInfo')).toBeLessThan(callOrder.indexOf('move'));
    });

    it('should handle multiple vehicle types in sequence (Chai expect)', () => {
        const vehicles = [
            new Car('Toyota'),
            new Motorcycle('Yamaha'),
            new Scooter('Segway')
        ];

        vehicles.forEach(vehicle => {
            startTrip(vehicle);

            chaiExpect(vehicle).to.have.property('move').that.is.a('function');
            chaiExpect(vehicle).to.have.property('getInfo').that.is.a('function');
        });

        // Vitest assertion
        expect(consoleLogSpy.mock.calls.length).toBeGreaterThan(12);
    });

    it('should properly manipulate object properties (Chai expect)', () => {
        const car = new Car('BMW');
        const initialInfo = car.getInfo();

        chaiExpect(initialInfo).to.be.a('string').and.not.be.empty;
        chaiExpect(initialInfo).to.match(/BMW/);

        startTrip(car);

        const afterInfo = car.getInfo();

        chaiExpect(afterInfo).to.equal(initialInfo);
        chaiExpect(car).to.be.an.instanceOf(Car);
    });
});
