import { expect } from 'chai';
import * as sinon from 'sinon';
import { Car, Motorcycle, Scooter, startTrip, Driveable } from '../src/transport';

describe('Transport Tests with Mocks and Stubs', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should mock Car move method and return custom message', () => {
        const car = new Car('Toyota Camry');
        const moveStub = sandbox.stub(car, 'move').returns('Mocked car movement');

        const result = car.move();

        expect(result).to.equal('Mocked car movement');
        expect(moveStub.calledOnce).to.be.true;
    });

    it('should mock Motorcycle getInfo method', () => {
        const moto = new Motorcycle('Honda CBR');
        const getInfoStub = sandbox.stub(moto, 'getInfo').returns('Mocked motorcycle info');

        const result = moto.getInfo();

        expect(result).to.equal('Mocked motorcycle info');
        expect(getInfoStub.calledOnce).to.be.true;
    });

    it('should verify console.log is called when Scooter moves', () => {
        const scooter = new Scooter('Xiaomi Pro 2');
        const consoleLogSpy = sandbox.spy(console, 'log');

        scooter.move();

        expect(consoleLogSpy.called).to.be.true;
        expect(consoleLogSpy.calledWith('Starting Xiaomi Pro 2...')).to.be.true;
    });

    it('should test startTrip function with mocked Driveable object', () => {
        const mockVehicle: Driveable = {
            move: sandbox.stub().returns('Mocked movement'),
            getInfo: sandbox.stub().returns('Mocked vehicle info')
        };

        const result = startTrip(mockVehicle);

        expect(result).to.equal('Mocked movement');
        expect((mockVehicle.move as sinon.SinonStub).calledOnce).to.be.true;
        expect((mockVehicle.getInfo as sinon.SinonStub).calledOnce).to.be.true;
    });

    it('should verify the order of method calls in Car', () => {
        const car = new Car('Tesla Model S');
        const moveStub = sandbox.stub(car, 'move').returns('Tesla is moving');
        const getInfoStub = sandbox.stub(car, 'getInfo').returns('Tesla info');

        car.getInfo();
        car.move();

        expect(getInfoStub.calledBefore(moveStub)).to.be.true;
        expect(getInfoStub.calledOnce).to.be.true;
        expect(moveStub.calledOnce).to.be.true;
    });

    it('should stub Car move method to return different values on consecutive calls', () => {
        const car = new Car('BMW X5');
        const moveStub = sandbox.stub(car, 'move');

        moveStub.onFirstCall().returns('First movement');
        moveStub.onSecondCall().returns('Second movement');
        moveStub.onThirdCall().returns('Third movement');

        expect(car.move()).to.equal('First movement');
        expect(car.move()).to.equal('Second movement');
        expect(car.move()).to.equal('Third movement');
        expect(moveStub.callCount).to.equal(3);
    });

    it('should verify startTrip calls vehicle methods in correct sequence', () => {
        const motorcycle = new Motorcycle('Yamaha R1');
        const getInfoSpy = sandbox.spy(motorcycle, 'getInfo');
        const moveSpy = sandbox.spy(motorcycle, 'move');

        startTrip(motorcycle);

        expect(getInfoSpy.calledOnce).to.be.true;
        expect(moveSpy.calledOnce).to.be.true;
        expect(getInfoSpy.calledBefore(moveSpy)).to.be.true;
    });
});
