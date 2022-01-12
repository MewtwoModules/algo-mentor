const db = require('../models/dbModel.js');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
    const { username, password, email, name } = req.body;
  console.log("inside create User");
    try {
        const hashPassword = bcrypt.hashSync(password, 10);
        const myQuery = `INSERT INTO users (username, password, email, name) VALUES ($1, $2, $3, $4) RETURNING *`;
        const params = [username, hashPassword, email, name]
        const results = await db.query(myQuery, params);

        return next();
    } catch(error) {
        return next({log: error})
    }
}

userController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next({
          log: 'userController.loginUser error: Username or password was not provided.',
          status: 400,
          message: { err: 'Failed to log in. Username or password not provided.' },
        });
      }
    try {
        const myQuery = `SELECT * FROM users WHERE username = '${username}'`;
        const result = await db.query(myQuery);
        console.log("result",result);
       const compare = bcrypt.compareSync(password, result.rows[0].password);
       if(compare) {
           res.locals.user_id = result.rows[0].userid;
           return next()
       }
  
      //   console.log(result.rows[0].password)
       else {
        return res.status(200).json({ message: res.locals.errorMessage })
       }
    } catch(error) {
        return next({log: error})
    }
}

module.exports = userController;