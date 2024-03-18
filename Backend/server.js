const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const {connectDB} = require('./config/db')
const adminRoutes = require('./routers/adminRouter')
const userRouter = require('./routers/userRouter')
const dealerRouter = require('./routers/dealerRouter')
const carRoutes = require('./routers/carRouter')
const dealRouter = require('./routers/dealRouter')
const soldRouter = require('./routers/soldRouter')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const { authorization } = require('./middleware/authMiddleware')

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/', (req, res) => { 
    res.send("Welcome")
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/login', authorization)

app.use('/api/admin', adminRoutes)
app.use('/api/user', userRouter)
app.use('/api/dealer', dealerRouter)
app.use('/api/car', carRoutes)
app.use('/api/deal', dealRouter)
app.use('/api/sold', soldRouter)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function findDealershipById(dealershipId) {
//     try {
//         const collection = getDB().collection('dealership');
//         const dealership = await collection.findOne({ _id: new ObjectId(dealershipId) });
//         return dealership;
//     } catch (error) {
//         console.error('Error finding dealership by ID:', error);
//         throw error; // Rethrow the error to handle it in the caller function
//     }
// }

// // Example usage:
// const dealershipId = '65f47a9df092706258f69dc2'; // Example dealership ID
// const foundDealership = findDealershipById(dealershipId)
// .then((foundDealership) =>{

//     console.log('Found dealership:', foundDealership);
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, console.log(`listening on http://localhost:${PORT}`.yellow)) 