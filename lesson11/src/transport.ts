
abstract class Transport {
    protected model: string;

    public constructor(model: string) {
        this.model = model;
    }

    public abstract move(): string;
    public abstract getInfo(): string;

    protected logStart(): string {
        const message = `Starting ${this.model}...`;
        console.log(message);
        return message;
    }
}


export interface Driveable {
    move(): string;
    getInfo(): string;
}


export class Car extends Transport implements Driveable {
    public move(): string {
        this.logStart();
        const message = `${this.model} is driving on the road.`;
        console.log(message);
        return message;
    }

    public getInfo(): string {
        return `Car model: ${this.model}`;
    }
}

export class Motorcycle extends Transport implements Driveable {
    public move(): string {
        this.logStart();
        const message = `${this.model} is speeding like crazy!`;
        console.log(message);
        return message;
    }

    public getInfo(): string {
        return `Motorcycle model: ${this.model}`;
    }
}

export class Scooter extends Transport implements Driveable {
    public move(): string {
        this.logStart();
        const message = `${this.model} is quietly cruising.`;
        console.log(message);
        return message;
    }

    public getInfo(): string {
        return `Electric scooter: ${this.model}`;
    }
}


export function startTrip(vehicle: Driveable): string {
    console.log('=== Trip started ===');
    console.log(vehicle.getInfo());
    const result = vehicle.move();
    console.log('=== Trip finished ===\n');
    return result;
}
