const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let port = 8000;


app.get("/message", (req, res)=>{
    res.json({msg: "Welcome to the backend!"})
})


app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}...`)
})