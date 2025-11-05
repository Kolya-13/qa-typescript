export interface ApiObject {
    id: string;
    name: string;
    data: Record<string, string | number | null> | null;
}


export class ApiObjectClass implements ApiObject {
    public id: string;
    public name: string;
    public data: Record<string, string | number | null> | null;

    public constructor(id: string, name: string, data: Record<string, string | number | null> | null) {
        this.id = id;
        this.name = name;
        this.data = data;
    }
}
