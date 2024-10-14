const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
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

        try {
            // await User.create({
            //     name: "Babu Rao",
            //     password: "123456",
            //     email: "baburao007@gmail.com",
            //     location: "Chaul"
            // })
            // res.json({success:true});
            // Use data from the request body instead of hardcoding
            const { name, password, email, location } = req.body;

            // Create the user in the database with dynamic values
            await User.create({
                name,
                password,
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
            if (password !== userData.password) {
                return res.status(400).json({ errors: "incorrect credentials. retry!!!" })
            }

            return res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

module.exports = router;