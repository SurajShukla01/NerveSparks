// 

const { MongoClient, ObjectId } = require('mongodb');

// Define the chat schema
const chatSchema = {
    chatName: { type: 'string' },
    isGroupChat: { type: 'boolean', default: false },
    users: [{ type: 'objectId' }],
    latestMessage: { type: 'objectId' },
    groupAdmin: { type: 'objectId' },
    createdAt: { type: 'date' },
    updatedAt: { type: 'date' }
};

async function connectToMongoDB() {
    const uri = 'mongodb://localhost:27017'; // Connection URI
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Access a specific database
        const database = client.db('myDatabase');

        // Access a specific collection
        const collection = database.collection('chats');

        // Create indexes if needed
        await collection.createIndex({ chatName: 1 });

        // Define functions for CRUD operations
        const Chat = {
            create: async (chatData) => {
                chatData.createdAt = new Date();
                chatData.updatedAt = new Date();
                const result = await collection.insertOne(chatData);
                return result.ops[0];
            },
            findById: async (id) => {
                return await collection.findOne({ _id: ObjectId(id) });
            },
            update: async (id, newData) => {
                newData.updatedAt = new Date();
                await collection.updateOne({ _id: ObjectId(id) }, { $set: newData });
                return await Chat.findById(id);
            },
            delete: async (id) => {
                await collection.deleteOne({ _id: ObjectId(id) });
            }
        };

        // Example usage
        const newChat = await Chat.create({
            chatName: "Test Chat",
            users: [],
            latestMessage: null,
            groupAdmin: null
        });
        console.log('New chat created:', newChat);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

// Call the function to connect and perform operations
connectToMongoDB();
