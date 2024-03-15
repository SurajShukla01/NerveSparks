const {Deal} = require('../models/deal')
const { getDB } = require('../config/db')

const createDeal = async (req,res) => {
    const DealData = req.body
    
    const parsedPayload = Deal.safeParse(DealData);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('deal');
        DealData.createdAt = new Date();
        DealData.updatedAt = new Date();

        await collection.insertOne(DealData);

        console.log('deal data inserted successfully.');
        return res.status(200).json({ msg: "deal created successfully." });
    } catch (error) {
        console.error('Error inserting deal data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createDeal
}