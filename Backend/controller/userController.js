const {User} = require('../models/user')
const { getDB } = require('../config/db')

const createUser = async (req,res) => {
    const usernData = req.body
    
    const parsedPayload = User.safeParse(usernData);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('user');
        usernData.createdAt = new Date();
        usernData.updatedAt = new Date();

        await collection.insertOne(usernData);

        console.log('User data inserted successfully.');
        return res.status(200).json({ msg: "User created successfully." });
    } catch (error) {
        console.error('Error inserting user data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createUser
}