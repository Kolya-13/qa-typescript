import { ApiObject } from './types';

export async function fetchApiObjects(): Promise<ApiObject[]> {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data as ApiObject[];
}

export class ShortApiObject {
    public id: string;
    public name: string;
    public summary: string;
    public numericSum: number;

    public constructor(obj: ApiObject) {
        this.id = obj.id;
        this.name = obj.name;
        this.summary = `${obj.name} (${obj.id})`;
        this.numericSum = 0;
        if (obj.data) {
            for (const value of Object.values(obj.data)) {
                if (typeof value === 'number') {
                    this.numericSum += value;
                } else if (typeof value === 'string' && !isNaN(Number(value))) {
                    this.numericSum += Number(value);
                }
            }
        }
    }
}

export function convertToShortApiObjects(apiObjects: ApiObject[]): ShortApiObject[] {
    return apiObjects.map(obj => new ShortApiObject(obj));
}
