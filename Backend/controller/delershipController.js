const {Dealership} = require('../models/dealership')
const { getDB } = require('../config/db')

const createDealership = async (req,res) => {
    const DealershipData = req.body
    
    const parsedPayload = Dealership.safeParse(DealershipData);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('dealership');
        DealershipData.createdAt = new Date();
        DealershipData.updatedAt = new Date();

        await collection.insertOne(DealershipData);

        console.log('Dealership data inserted successfully.');
        return res.status(200).json({ msg: "Dealership created successfully." });
    } catch (error) {
        console.error('Error inserting Dealership data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createDealership
}