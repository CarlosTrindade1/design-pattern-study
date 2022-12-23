interface User {
    name: string;
    age: number;
}

export class Database {
    private static instance: Database | null = null;
    private users: User[] = [];

    private constructor() {}

    public static getInstance(): Database {
        if (this.instance === null) {
            this.instance = new Database();

            return this.instance;
        }

        return this.instance;
    }

    public addUser(user: User): void {
        this.users.push(user);
    }

    public removeUser(index: number): void {
        this.users.splice(index, 1);
    }

    public showUsers(): void {
        console.log(this.users);
    }
}