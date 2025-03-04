const connect = require('./db');

// Database Names
// const dbName = 'school';
const dbName = 'w3resource';

// Collection Names
// for school db
// const collectionName = 'students';
// const collectionName = 'personal';
//for w3resource db
const collectionName = 'restaurants';

const queryDocument = async () => {
    const db = await connect(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();
    console.log(result);
}

queryDocument();
