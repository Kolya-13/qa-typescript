
abstract class Transport {
    protected model: string;

    public constructor(model: string) {
        this.model = model;
    }

    public abstract move(): void; // поліморфізм
    public abstract getInfo(): string;

    protected logStart(): void {
        console.log(`Starting ${this.model}...`);
    }
}


export interface Driveable {
    move(): void;
    getInfo(): string;
}


export class Car extends Transport implements Driveable {
    public move(): void {
        this.logStart();
        console.log(`${this.model} is driving on the road.`);
    }

    public getInfo(): string {
        return `Car model: ${this.model}`;
    }
}

export class Motorcycle extends Transport implements Driveable {
    public move(): void {
        this.logStart();
        console.log(`${this.model} is speeding like crazy!`);
    }

    public getInfo(): string {
        return `Motorcycle model: ${this.model}`;
    }
}

export class Scooter extends Transport implements Driveable {
    public move(): void {
        this.logStart();
        console.log(`${this.model} is quietly cruising.`);
    }

    public getInfo(): string {
        return `Electric scooter: ${this.model}`;
    }
}


export function startTrip(vehicle: Driveable): void {
    console.log('=== Trip started ===');
    console.log(vehicle.getInfo());
    vehicle.move();
    console.log('=== Trip finished ===\n');
}
