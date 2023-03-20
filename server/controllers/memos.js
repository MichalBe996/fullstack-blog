

const Memo = require("../models/Memo")



const getAllMemos = async (req, res) => {
    try {
        const allMemos = await Memo.find({})
        res.status(200).json({allMemos})
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
}

const createMemo = async (req, res) =>{
    try {
        const memo = await Memo.create(req.body)
        res.status(201).json({memo})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}


module.exports = {
    getAllMemos,
    createMemo
}