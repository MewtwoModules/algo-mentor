const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//routes to users
// router.post('/createUser', userController.createUser, (req,res) => res.status(200).json({
//    user_id: res.locals.user_id 
// }));

router.post('/createUser', userController.createUser, (req, res) => {
    res.status(200).json({ 
      user_id: res.locals.user_id});
  });



// router.post('/verifyUser', userController.verifyUser, (req,res) =>  res.status(200).send('logged in'));

router.post('/verifyUser', userController.verifyUser, (req, res) => {
    res.status(200).json({ user_id: res.locals.user_id });
  });

module.exports = router;