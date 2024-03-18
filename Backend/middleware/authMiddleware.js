const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { getDB } = require('../config/db')
const { ObjectId } = require('mongodb');

const asyncHandler = require('express-async-handler')

async function comparePassword(password, hash) {
    try {
        const isMatch = await bcrypt.compare(password, hash); 
        return isMatch;
    } catch (error) {
        console.error('Error comparing password:', error);
        throw error;
    }
}

function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); 
}

const protect = asyncHandler(async (req, res, next) => {
    let tocken
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        try{
            tocken = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(tocken, process.env.JWT_SECRET)
            if(decoded.userType == 1){
                req.user = await getDB().collection('user').findOne({ _id: new ObjectId(decoded.user_id)})
                delete req.user.password
                req.user = {...req.user,...{userType:decoded.userType}}
                next()
            }
            if(decoded.userType == 5){
                req.user = await getDB().collection('dealership').findOne({ _id: new ObjectId(decoded.user_id)})
                delete req.user.password
                req.user = {...req.user,...{userType:decoded.userType}}
                next()
            }
            if(decoded.userType == 10){
                req.user = await getDB().collection('admin').findOne({ _id: new ObjectId(decoded.user_id)})
                delete req.user.password
                req.user = {...req.user,...{userType:decoded.userType}}
                next()
            }
        }
        catch(e){
            console.log("Not authorized, token failed")
            return res.status(401).json({message: "Not authorized, token failed"})
        }
    }
    else{
        console.log("Not authorized, no token")
        return res.status(401).json({message: "Not authorized, no token"})
    }
    
    if(!tocken){
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

const velidateUser = asyncHandler(async (req, res, next) => { 

    if(req.user.userType == 1 || req.user.userType == 10){
        next()
    }
    else{
        return res.status(404).json({message: "1Not Found"})
    }
})
const velidateUserDealer = asyncHandler(async (req, res, next) => {
    console.log(req.user.userType);
    if(req.user.userType == 1 || req.user.userType == 5 || req.user.userType == 10){
        next()
    }
    else{
        return res.status(404).json({message: "2Not Found"})
    }
})
const velidateDealer = asyncHandler(async (req, res, next) => {
    if(req.user.userType == 5 || req.user.userType == 10){
        next()
    }
    else{
        return res.status(404).json({message: "3Not Found"})
    }
})
const velidateAdmin = asyncHandler(async (req, res, next) => {
    if(req.user.userType == 10){
        next()
    }
    else{
        return res.status(404).json({message: "4Not Found"})
    }
})

const authorization = asyncHandler( async (req,res,next) => {
    const {email, password} = req.body
    let userType
    if (!email || !password){
        res.status(400)
        throw new Error("Please enter a all Fields")
    }
    
    let user = await getDB().collection('user').findOne({user_email: email}) 
    console.log("user",user);
    if(user){
        userType = 1
    }
    else{
        user = await getDB().collection('dealership').findOne({dealership_email: email}) 
        console.log("dealer",user);
        if(user){
            userType = 5
        }
        else{
            user = await getDB().collection('admin').findOne({username: email}) 
            console.log("admin",user);
            if(user){
                userType = 10
                console.log(userType);
            }
            else{
                userType = -1
            }
        }
    }
    
    
    if(userType<0){
        return res.status(400).json({
            msg:"email not found"
        })
    }

    if(comparePassword(password, user.password)){
        delete user.password
        res.status(200).json({
            ...user,
            userType: userType,
            tocken: generateToken({user_id: user._id, userType:userType}),
        })
    } else{
        res.status(401)
        throw new Error("Invelid emailID and password") 
    }
})

module.exports = {
    protect,
    authorization,
    velidateUser,
    velidateDealer,
    velidateAdmin,
    velidateUserDealer
}