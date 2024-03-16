const {Deal} = require('../models/deal')
const { getDB } = require('../config/db')
const { ObjectId } = require('mongodb');

const createDeal = async (req, res) => {
    const did = req.params.dID
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

        const dData = await collection.insertOne(DealData);
        console.log('deal data inserted successfully.');

        let response = await getDB().collection('dealership').updateOne(
            { _id: new ObjectId(did)},
            {
                $push: {
                    deals: dData.insertedId.toString()
                }
            }
        );
        console.log('Deal appended to the dealership successfully.',response);

        return res.status(200).json({ msg: "deal created successfully." });
    } catch (error) {
        console.error('Error inserting deal data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createDeal
}