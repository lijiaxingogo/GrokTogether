const Questions = require("../models/questions");
const questionsController = {};
questionsController.saveQuestions = async (req, res, next) => {
  const questions = new Questions(req.body);
  try {
    await questions.save();
    return next();
  } catch (error) {
    return next({
      log: `questionsController.saveQuestions: Error:${error}`,
      message: {
        err:
          "Error occured in questionsController.saveQuestions. Check server logs for more details.",
      },
    });
  }
};

questionsController.getQuestions = async (req, res, next) => {
  try {
    const questions = await Questions.find({});
    res.locals.questions = questions;
    return next();
  } catch (error) {
    return next({
      // TODO: where I can get the error msg, when I pass res.json(users)  got An error occurred
      log: `questionsController.getQuestions: Error:${error}`,
      message: {
        err:
          "Error occured in questionsController.getQuestions. Check server logs for more details.",
      },
    });
  }
};
module.exports = questionsController;
