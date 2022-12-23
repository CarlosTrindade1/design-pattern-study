import { Database } from './Database'
import { database } from './index';
import './index';

const database1 = Database.getInstance();

database1.addUser({ name: 'Erisvaldo', age: 40 });
database1.addUser({ name: 'Luzia', age: 63 });

database1.showUsers();

console.log(database1 === database)