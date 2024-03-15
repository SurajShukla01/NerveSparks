const { MongoClient, ObjectId } = require('mongodb');

const chatSchema = {
    chatName: { type: 'string', trim: true },
    isGroupChat: { type: 'boolean', default: false },
    users: [{ type: 'objectId', ref: 'User' }],
    latestMessage: { type: 'objectId', ref: 'Message' },
    groupAdmin: { type: 'objectId', ref: 'User' },
    createdAt: { type: 'date' },
    updatedAt: { type: 'date' }
};

// Function to create a new chat
async function createChat(db, chatData) {
    chatData.createdAt = new Date();
    chatData.updatedAt = new Date();
    await db.collection('chats').insertOne(chatData);
}

// Function to get a chat by ID
async function getChatById(db, chatId) {
    return await db.collection('chats').findOne({ _id: ObjectId(chatId) });
}

// Connect to the MongoDB cluster
async function connectToMongoDB() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('your_database_name'); // Change this to your database name

        // Example usage:
        const chatData = {
            chatName: 'Sample Chat',
            isGroupChat: true,
            users: [],
            latestMessage: null,
            groupAdmin: null
        };

        await createChat(database, chatData);
        const chat = await getChatById(database, 'chat_id_here');
        console.log('Retrieved chat:', chat);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

// Call the function to connect and perform operations
connectToMongoDB();
