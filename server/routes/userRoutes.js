const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//routes to users
router.post('/createUser', userController.createUser, (req,res) => res.status(200).json('user created'));

router.post('/verifyUser', userController.verifyUser, (req,res) =>  res.status(200).send('logged in'));

module.exports = router;