class Staff {
    private _name: string;
    private _email: string;
    private _age: number;


    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }
}
let staff = new Staff('viet 1', 'vmk@gmail.com', 18);
let staffName = staff.getName();
console.log(staffName);
staff.setName('viet 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff);