const express = require('express');
const path = require('path');
const app = express();
const cookieparse = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const userRoutes = require('./routes/userRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');
require('./passport');

// Body parsing, query string parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2'],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(passport.initialize()); //initialized passport authentication process
app.use(passport.session()); // using session to authenticate, using cookieSession

app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);
app.get('/companies', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.get('/failed', (req, res) => res.send('You Failed to log in!'));

app.get('/good', isLoggedIn, (req, res) => {
  console.log('fhosfdij');
  res.send(`Welcome ${req.user.email}!`);
});

// hit this with Login with Google button
app.get(
  '/api/googleAuth',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/google',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect to companies.
    console.log('fodisjfo');
    res.redirect('/companies');
  }
);

// Logout button
app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

app.use('/api/user', userRoutes);
app.use('/api/questions', questionRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Set app to listen to port 3000
app.listen(3000, () => {
  console.log('Listening on PORT 3000...');
});

//api/user/createUser
//api/user/verifyUser
//api/questions/org