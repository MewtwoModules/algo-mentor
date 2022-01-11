const db = require('../models/dbModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
    const { userName, password, email } = req.body;
  console.log("inside create User");
    try {
        const hashPassword = bcrypt.hashSync(password, 10);
        const myQuery = `INSERT INTO users (userName, password, email) VALUES ($1, $2, $3) RETURNING *`;
        const params = [userName, hashPassword, email]
        const results = await db.query(myQuery, params);

        return next();
    } catch(error) {
        return next({log: error})
    }
}

userController.verifyUser = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const myQuery = `SELECT * FROM users WHERE username = '${userName}'`;
        const result = await db.query(myQuery);
        console.log("result",result);
       const compare = bcrypt.compareSync(password, result.rows[0].password);
        console.log("compare",compare);
      //   console.log(result.rows[0].password)
        if(!compare) {
            return next({log: 'Wrong Password!!!'});
        }
         return next();
    } catch(error) {
        return next({log: error})
    }
}

module.exports = userController;