const express = require("express")
const router = express.Router()

const names = {
    "names": ["me", "you", "them", "us", "her", "him", "they", "y'all"]
}

router.get("/", async(req,res,next) =>{
    res.status(200).json(names)
})

router.post("/:namesArray",async(req, res, next) => {
    console.log(req.params)
    
    res.status(200).json(req.params)
})
module.exports = router