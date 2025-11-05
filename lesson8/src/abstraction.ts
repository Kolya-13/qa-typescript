// Абстрактний клас, який описує базову електроніку
export abstract class ElectronicDevice {
    public id: string;
    public name: string;

    public constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public abstract getInfo(): string;
}

// Клас-компонент, який додає ціну
export class PriceComponent {
    public price: number;

    public constructor(price: number) {
        this.price = price;
    }
}

// Клас, який наслідує ElectronicDevice та використовує композицію з PriceComponent
export class Smartphone extends ElectronicDevice {
    public color: string;
    public priceComponent: PriceComponent;

    public constructor(id: string, name: string, color: string, price: number) {
        super(id, name);
        this.color = color;
        this.priceComponent = new PriceComponent(price);
    }

    public getInfo(): string {
        return `${this.name} (${this.color}) - ${this.priceComponent.price} грн.`;
    }
}


