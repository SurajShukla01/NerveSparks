const { Car } = require('../models/cars')
const { getDB } = require('../config/db')
const { ObjectId } = require('mongodb');

const createCar = async (req, res) => {
    const did = req.params.dID
    const CarData = req.body
    
    const parsedPayload = Car.safeParse(CarData);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    try {
        const collection = getDB().collection('car');
        CarData.createdAt = new Date();
        CarData.updatedAt = new Date();

        const cardata = await collection.insertOne(CarData);
        console.log('car data inserted successfully.');

        let response = await getDB().collection('dealership').updateOne(
            { _id: new ObjectId(did)},
            {
                $push: {
                    cars: cardata.insertedId.toString()
                }
            }
        );

        console.log('Car appended to the dealership successfully.',response);

        return res.status(200).json({ msg: "car created successfully." });
    } catch (error) {
        console.error('Error inserting car data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
const getAllCars = async (req, res) => {
    try {
        const carData = await getDB().collection('car').findOne({})
        return res.json({ cars: carData })
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createCar,
    getAllCars
}