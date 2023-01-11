class BankAccount {
    private _name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this._name = name;
        this._balance = balance;
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        this._balance -= amount;
    }

    public getBalance(): number {
        return this._balance;
    }
}
