import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(PORT, ()=>{
    console.log('🚀 server running on port ',PORT)
})