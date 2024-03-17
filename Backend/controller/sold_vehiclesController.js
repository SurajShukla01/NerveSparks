const { Sold } = require('../models/sold_vehicles')
const { getDB } = require('../config/db')
const { ObjectId } = require('mongodb')


function generateRandomRegistrationNumber(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


const addVehicle = async (req, res) => {
    const cid = req.params.cID
    const car_id = req.body.car_id
    let sjson = {
        "car_id": "",
        "vehicle_info": {
            "sale_date": "",
            "sale_price": 0,
            "registration_no": ""
        }
    }

    if (!cid || !car_id) {
        return res.status(411).json({
            msg: "Invalid Inputs"
        })
    }

    try {
        let deal = await getDB().collection('deal').findOne({ car_id: car_id })
        if (deal.deal_info.status != 'active') {
            return res.status(400).json({ msg: "This deal is not active" });
        }

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        sjson.car_id = car_id;
        sjson.vehicle_info.sale_date = formattedDate
        sjson.vehicle_info.sale_price = deal.deal_info.price - deal.deal_info.discount
        sjson.vehicle_info.registration_no = generateRandomRegistrationNumber(10);
    }
    catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", error: error });
    }
    console.log(sjson);
    const parsedPayload = Sold.safeParse(sjson);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Invalid payload"
        })
    }
    try {
        const collection = getDB().collection('sold');
        sjson.createdAt = new Date();
        sjson.updatedAt = new Date();

        vehicle = await collection.insertOne(sjson);
        console.log('Sold data inserted successfully.');

        let response1 = await getDB().collection('user').updateOne(
            { _id: new ObjectId(cid) },
            {
                $push: {
                    vehicle_info: vehicle.insertedId.toString()
                }
            }
        );
        console.log('Car appended to the user successfully.', response1);
        const dealerData = await getDB().collection('dealership').findOne({ cars:{ $in: [car_id] } });
        let response2 = await getDB().collection('dealership').updateOne(
            { _id: new ObjectId(dealerData._id) },
            {
                $push: {
                    sold_vehicles: vehicle.insertedId.toString()
                }
            }
        );

        console.log('Car appended to the dealer successfully.', response2);
        return res.status(200).json({ msg: "Car purchaseds successfully.", userCarRegistration: sjson.vehicle_info.registration_no });
    } catch (error) {
        console.error('Error inserting Sold data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getSoldVehicles = async (req, res) => {
    const did = req.params.did
    let result = []
    try {
        const dealerData = await getDB().collection('dealership').findOne({ _id: new ObjectId(did) });
        let vehiclelist = dealerData.sold_vehicles
        for (let vehicle of vehiclelist) {
            const soldDealData = await getDB().collection('sold').findOne({ _id: new ObjectId(vehicle) });
            const userData = await getDB().collection('user').findOne({ vehicle_info: {$in:[vehicle]} })
            const carData = await getDB().collection('car').findOne({ _id: new ObjectId(soldDealData.car_id) });
            let tempjson = {...userData, ...soldDealData, ...carData}
            delete tempjson._id
            delete tempjson.createdAt
            delete tempjson.updatedAt
            delete tempjson.password
            tempjson._id = vehicle
            result.push(tempjson);
            console.log(tempjson);
        }
        
        return res.status(200).json({ Sold_Cars: result});
    } catch (error) {
        console.error('Error inserting Sold data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllSoldVehicles = async (req, res) => {
    try {
        const Data = await getDB().collection('sold').find().toArray()
        return res.json({ SoldVehicles: Data })
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    addVehicle,
    getSoldVehicles,
    getAllSoldVehicles
}