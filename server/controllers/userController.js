const User = require('../models/users');

const userController = {};

userController.getCards = async (req, res, next) => {
  try {
    const data = await User.find({});
    res.locals.users = data;
    return next();
  } catch (error) {
    return next({
      // TODO: where I can get the error msg, when I pass res.json(users)  got An error occurred
      log: `userController.getCards: Error:${error}`,
      message: {
        err:
          'Error occured in userController.getCards. Check server logs for more details.',
      },
    });
  }
};
userController.saveCards = async (req, res, next) => {
  const newData = new User(req.body);
  try {
    await newData.save();
    return next();
  } catch (error) {
    return next({
      log: `userController.saveCards: Error:${error}`,
      message: {
        err:
          'Error occured in userController.saveCards. Check server logs for more details.',
      },
    });
  }
};
module.exports = userController;
