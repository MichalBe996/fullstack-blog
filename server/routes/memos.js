

const express = require("express")
const router = express.Router()


const {getAllMemos, createMemo} = require("../controllers/memos")




router.route("/").get(getAllMemos).post(createMemo);



module.exports = router;