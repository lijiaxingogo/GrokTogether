/* eslint-disable quotes */
const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/users');
// require controller
const userController = require('./controllers/userController');
const questionsController = require('./controllers/questionsController');

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const userRouter = express.Router();
const MONGO_URI =
  'mongodb+srv://Jiajiajiayou:lijiaxin123@cluster0.zhctm.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cards',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
// test for get request
app.get('/', (req, res) => {
  res.json('this is a get page');
});
// get cards '/'
userRouter.get('/', userController.getCards, (req, res) =>
  res.json(res.locals.users)
);
// save cards info '/create'
userRouter.post('/create', userController.saveCards, (req, res) => {
  console.log('now you are in the create route');
  res.send('Data is saved');
});
// display question
userRouter.get('/questions', questionsController.getQuestions, (req, res) =>
  res.json(res.locals.questions)
);
// save questions '/question'
userRouter.post('/questions', questionsController.saveQuestions, (req, res) => {
  res.send('Question is saved');
});

// global error handling:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  // const errorObj = Object.assign(err, defaultErr);
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
app.use('/user', userRouter);
app.listen(port, () => console.log(`Listening on port ${port}`));

// /
