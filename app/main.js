import Dexie from 'dexie';

const db = new Dexie('localDB');
db.version(1).stores({
    transactions: `name, value`
});

export default db;