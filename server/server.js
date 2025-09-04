import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(PORT, ()=>{
    console.log('server running on port ',PORT)
})