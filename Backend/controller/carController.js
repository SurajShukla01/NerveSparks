const {Car} = require('../models/cars')
const { getDB } = require('../config/db')

const createCar = async (req,res) => {
    const CarData = req.body
    
    const parsedPayload = Car.safeParse(CarData);
    if(!parsedPayload.success)
    {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('car');
        CarData.createdAt = new Date();
        CarData.updatedAt = new Date();

        await collection.insertOne(CarData);

        console.log('car data inserted successfully.');
        return res.status(200).json({ msg: "car created successfully." });
    } catch (error) {
        console.error('Error inserting car data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { 
    createCar
}