const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'digital_library_db';

let client;
let db;

async function connectToDatabase() {
    try {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db(DB_NAME);
        console.log('Connected to MongoDB');
        
        // Create indexes
        await db.collection('media').createIndex({ title: 1 });
        await db.collection('media').createIndex({ "details.genre": 1 });
        
        return db;
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

function getDatabase() {
    return db;
}

module.exports = { connectToDatabase, getDatabase };