const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "nlDhQOujzhzxKIngSAFUzZGaohDeIZNH"


router.post("/createuser",
    [
        body('email').isEmail(),
        body('name').isLength({ min: 5 }),
        body('password', 'ïncorrect pass').isLength({ min: 5 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt);
        try {
            // await User.create({
            //     name: "Babu Rao",
            //     password: "123456",
            //     email: "baburao007@gmail.com",
            //     location: "Chaul"
            // })
            // res.json({success:true});
            // Use data from the request body instead of hardcoding
            const { name, email, location } = req.body;

            // Create the user in the database with dynamic values
            await User.create({
                name,
                password : secPassword,
                email,
                location
            });

            // Respond with success message
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

router.post("/loginuser",
    [
        body('email').isEmail(),
        body('password', 'ïncorrect pass').isLength({ min: 5 })
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let userData = await User.findOne({email});
            if (!userData) {
                return res.status(400).json({ errors: "incorrect credentials. retry!!!" })
            }
            const pwdCompare = await bcrypt.compare(password,userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "incorrect credentials. retry!!!" })
            }

            const data = {
                user:{
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true,authToken : authToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

module.exports = router;