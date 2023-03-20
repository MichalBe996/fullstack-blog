const mongoose = require("mongoose")


const MemoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must provide title"],
        trim: false,
        maxlength: [40, "title cannot be longer than 40 characters"]
    },
    memocontent: {
        type: String,
        required: [true, "must provide memo body"],
        trim: false,
        maxlength: [300, "memo has to be 300 characters or shorter"]
    }
})



module.exports = mongoose.model("Memo", MemoSchema)