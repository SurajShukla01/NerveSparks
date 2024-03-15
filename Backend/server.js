const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const {connectDB} = require('./config/db')
const adminRoutes = require('./routers/adminRouter')
const userRouter = require('./routers/userRouter')
const dealerRouter = require('./routers/dealerRouter')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get('/', (req, res) => { 
    res.send("Welcome")
})

app.use('/api/admin', adminRoutes)
app.use('/api/user', userRouter)
app.use('/api/dealer', dealerRouter)

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, console.log(`listening on http://localhost:${PORT}`.yellow)) 