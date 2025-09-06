import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import chatRouter from './routes/chatRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
connectDB()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home page')
})
app.use('/api/user',userRouter)
app.use('/api/chat',chatRouter)

app.listen(PORT, ()=>{
    console.log('server running on port ',PORT)
})