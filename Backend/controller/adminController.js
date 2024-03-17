const bcrypt = require('bcryptjs');
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
        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        adminData.password = hashedPassword;
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

// const authorisation = asyncHandler( async (req,res,next) => {
//     const {email, password} = req.body
    
//     if (!email || !password){
//         res.status(400)
//         throw new Error("Please enter a all Fields")
//     }
    
//     const user = await User.findOne({email}) 
    
//     if(user && (await user.matchPassword(password))){
//         res.status(200).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             pic : user.pic,
//             tocken: generateTocken(user._id),
//         })
//     } else{
//         res.status(401)
//         throw new Error("Invelid emailID and password") 
//     }

//     next()
// })

module.exports = { 
    createAdmin
};
