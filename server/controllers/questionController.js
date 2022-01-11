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
  const { organization } = req.body;
    try {
        const myQuery = `SELECT * FROM questions where organization='${organization}'`;
        const results = await db.query(myQuery);
        res.locals.questions = results.rows;
        return next();
    } catch (error) {
        return next({log: error})
    }
};

questionController.postQuestion = async (req, res, next) => {
  const {qTitle, qDetails,qType,organization,qURL,userID} = req.body;
  try {
    const SQL = `INSERT into questions (qTitle, qDetails,qType,organization,qURL,userID) 
    VALUES ($1, $2, $3,$4, $5, $6)`;
    const params = [qTitle, qDetails,qType,organization,qURL,userID];    
    const results = await db.query(SQL, params);
    return next();
  } catch (error) {
    return next({log: error})    
  }
};


module.exports = questionController;