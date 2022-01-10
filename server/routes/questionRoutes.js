const express = require('express');
const router = express.Router();

const questionController = require('../controllers/questionController');

router.get('/org', questionController.getOrganizations, (req, res) => {
  // console.log('entered');
  return res.status(200).json(res.locals.organizations);
})

router.get('/', questionController.getQuestions, (req, res) => {
    // console.log('entered');
    return res.status(200).json(res.locals.questions);
})

router.post('/', questionController.postQuestion, (req, res) => {
    return res.status(200).json('question created')
})

module.exports = router;