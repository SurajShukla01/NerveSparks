const {Sold} = require('../models/sold_vehicles')
const { getDB } = require('../config/db')

const createSold = async (req,res) => {
    const SoldData = req.body
    
    const parsedPayload = Sold.safeParse(SoldData);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('sold');
        SoldData.createdAt = new Date();
        SoldData.updatedAt = new Date();

        await collection.insertOne(SoldData);

        console.log('Sold data inserted successfully.');
        return res.status(200).json({ msg: "Sold created successfully." });
    } catch (error) {
        console.error('Error inserting Sold data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createSold
}