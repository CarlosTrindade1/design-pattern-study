import { Database } from './Database'

export const database = Database.getInstance();

database.addUser({ name: 'Carlos', age: 19 });
database.addUser({ name: 'Luzinete', age: 38 });
database.addUser({ name: 'Gustavinho', age: 5 });