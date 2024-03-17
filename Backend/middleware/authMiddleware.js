// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// const { getDB } = require('../config/db')

// const asyncHandler = require('express-async-handler')

// async function comparePassword(password, hash) {
//     try {
//         const isMatch = await bcrypt.compare(password, hash); 
//         return isMatch;
//     } catch (error) {
//         console.error('Error comparing password:', error);
//         throw error;
//     }
// }

// const protect = asyncHandler(async (req, res, next) => {
//     let tocken
    
//     if (
//         req.headers &&
//         req.headers.authorization.startsWith('Bearer ')  
//     ){
//         try{
//             tocken = req.headers.authorization.split(' ')[1]
//             const decoded = jwt.verify(tocken, process.env.JWT_SECRET)
//             req.user = await User.findById(decoded.id).select("-password")
//             next()
//         }
//         catch(e){
//             res.status(401)
//             throw new Error("Not authorized, token failed")
//         }
//     }
    
//     if(!tocken){
//         res.status(401)
//         throw new Error("Not authorized, no token")
//     }
// })

// const authorization = asyncHandler( async (req,res,next) => {
//     const {email, password} = req.body
//     let userType
//     if (!email || !password){
//         res.status(400)
//         throw new Error("Please enter a all Fields")
//     }
    
//     let user = await getDB().collection('user').findOne({user_email: email}) 
//     if(user){
//         userType = 1
//     }
//     else{
//         user = await getDB().collection('dealership').findOne({dealership_email: email}) 
//         if(user){
//             userType = 5
//         }
//         else{
//             user = await getDB().collection('admin').findOne({username: email}) 
//             if(user){
//                 userType = 10
//             }
//             else{
//                 userType = -1
//             }
//         }
//     }

//     if(userType>0){
//         return res.status(400).json({
//             msg:"email not found"
//         })
//     }
    
//     if(comparePassword(password, user.password)){
//         delete user.password
//         res.status(200).json({
//             ...user,
//             tocken: generateTocken(user._id),
//         })
//     } else{
//         res.status(401)
//         throw new Error("Invelid emailID and password") 
//     }

//     next()
// })

// module.exports = {protect}