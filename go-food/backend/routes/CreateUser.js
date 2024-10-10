const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser", async (req,res) => {
    try{
        await User.create({
            name: "Babu Rao",
            password: "123456",
            email: "baburao007@gmail.com",
            location: "Chaul"
        })
        res.json({success:true});
    } catch(error){
        console.log(error);
        res.json({success:false})
    }
})

module.exports = router;