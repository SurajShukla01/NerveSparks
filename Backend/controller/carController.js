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
        console.log(req.user);
        try {
            const carData = await getDB().collection('car').find().toArray()
            return res.json({ cars: carData })
        }
        catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    const getDealerOfCar = async (req, res) => {
    const car_id = req.params.carID
    try {
        let response = await getDB().collection('dealership').findOne({ cars:{ $in: [car_id] } });
        return res.json({ dealer: response })
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getmycarInfo = async (req, res) => {
    const userID = req.params.cID
    try {
        let response = await getDB().collection('user').findOne({ _id: new ObjectId(userID) });
        
        let vehicleList = response.vehicle_info
        let resultjson = []
        for(let vehicle of vehicleList){
            let vehicleData = await getDB().collection('sold').findOne({ _id: new ObjectId(vehicle) });
            let carData = await getDB().collection('car').findOne({ _id: new ObjectId(vehicleData.car_id) });
            let DealerData = await getDB().collection('dealership').findOne({ sold_vehicles:{ $in: [vehicle] } });
            let tempjson = {...vehicleData, ...carData, ...DealerData}
            delete tempjson._id
            delete tempjson.car_id
            delete tempjson.createdAt
            delete tempjson.updatedAt
            delete tempjson.password
            delete tempjson.cars
            delete tempjson.deals
            delete tempjson.sold_vehicles
            tempjson._id = vehicle
            resultjson.push(tempjson);
        }

        return res.json(resultjson)
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    createCar,
    getAllCars,
    getDealerOfCar,
    getmycarInfo
}