const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
    let tocken
    
    if (
        req.headers &&
        req.headers.authorization.startsWith('Bearer ')  
    ){
        try{
            tocken = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(tocken, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            next()
        }
        catch(e){
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    }
    
    if(!tocken){
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

module.exports = {protect}