const { MongoClient } = require("mongodb");

const connect = async (dbName) => {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    await client.connect();

    return client.db(dbName);
} 

module.exports = connect;