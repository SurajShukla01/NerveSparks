const { MongoClient } = require('mongodb');
const colors = require('colors');

let client = null; // Global variable to store the MongoDB client

const connectDB = async () => {
    try {
        if (!client) {
            const uri = process.env.MONGO_URI;
            client = new MongoClient(uri, {});
            await client.connect();
            const host = uri.split('//')[1].split('/')[0].split(':')[0];
            console.log(`MongoDB Connected ${host}`.green.underline);
        }
    } catch (error) {
        console.error(`Error : ${error.message}`.red.bold);
        process.exit(1);
    }
}

const getDB = () => {
    if (!client) {
        throw new Error('MongoDB client is not initialized. Call connectDB() first.');
    }
    return client.db("ecommerse");
}

module.exports = { connectDB, getDB };
