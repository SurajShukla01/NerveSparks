//adminController.js
const { Admin } = require('../models/admin');
const { getDB } = require('../config/db');

const createAdmin = async (req, res) => {
    const adminData = req.body;

    const parsedPayload = Admin.safeParse(adminData);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Invalid Inputs"
        });
    }

    try {
        const collection = getDB().collection('admin');
        adminData.createdAt = new Date();
        adminData.updatedAt = new Date();

        await collection.insertOne(adminData);

        console.log('Admin data inserted successfully.');
        return res.status(200).json({ msg: "Admin created successfully." });
    } catch (error) {
        console.error('Error inserting admin data:', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { 
    createAdmin
};
