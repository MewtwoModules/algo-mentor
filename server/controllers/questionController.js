const db = require('../models/dbModel.js');

const questionController= {};

questionController.getOrganizations = async (req, res, next) => {
  try {
      const myQuery = 'select distinct(organization) from questions'
      const results = await db.query(myQuery);
      res.locals.organizations = results.rows;
      return next();
  } catch (error) {
      return next({log: err})
  }
};

questionController.getQuestions = async (req, res, next) => {
    try {
        const myQuery = 'SELECT * FROM questions'
        const results = await db.query(myQuery);
        res.locals.questions = results.rows;
        return next();
    } catch (error) {
        return next({log: err})
    }
};

questionController.postQuestion = async (req, res, next) => {
  return next();
};


module.exports = questionController;