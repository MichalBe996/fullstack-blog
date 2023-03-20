const express = require("express")
const cors = require("cors")
const memos = require("./routes/memos")
const connectDB = require("./db/connect")

const app = express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/api/v1/memos", memos)

let port = 8000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}


start();