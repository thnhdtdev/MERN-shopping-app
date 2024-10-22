import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001
const urlDB = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.lk7n4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const app = express()

app.listen(PORT, ()=>{
    console.log(`Server is stating at http://localhost:${PORT}`);
})