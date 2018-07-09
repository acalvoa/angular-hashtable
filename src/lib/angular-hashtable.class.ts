/*
* This class represents the class definition.
*/
export class HashTable<T, L> {
    private table: any;
    private id: string;

    constructor() {
        this.table = {};
    }

    public put(key: T, value: L): void {
        this.table['v_' + key] = value;
    }

    public get(key: T): L {
        return this.table['v_' + key];
    }

    public getAll(): L[] {
        const vector = Array.from(Object.keys(this.table), k => this.table[k]);
        return vector;
    }

    public getKeys(): string[] {
        const keys = Array.from(Object.keys(this.table), k => k.substring(2));
        return keys;
    }

    public has(key: T): boolean {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    }

    public remove(key: T): void {
        delete this.table['v_' + key];
    }

    public putArray(key: T, value: L): void {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
    }

    public getArray(key: T): L {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    }

    public removeArray(key: T, value: L): void {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
    }

    public hasArray(key: T): boolean {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        } else {
            return false;
        }
    }

    public hasinArray(key: T, value: L): boolean {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    public size(): number {
        return Object.keys(this.table).length;
    }
}
