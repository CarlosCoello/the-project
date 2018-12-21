const User = require('../models/User');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/registerMe', (req, res) => {
    console.log(req.body);
    if(req.body) {
        if(req.body.name) {
            if(req.body.email) {
                if(req.body.password) {
                    const hash = bcrypt.hashSync(req.body.password, saltRounds);    User.create({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        }, function(err, user) {
                            if(err) {
                                res.status(400).send({ success: false, message: err });
                            } else {
                                res.status(200).send({ success: true, message: user });
                            }
                        });
                } else {
                    res.status(400).send({ success: false, message: 'password is required' })
                }
            } else {
                res.status(400).send({ success: false, message: 'email is required' });
            }
        } else {
            res.status(400).send({ success: false, message: 'name is required' });
        }
    }
});

module.exports = router;