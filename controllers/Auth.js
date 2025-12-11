const asyncWrapper = require("../middleware/asyncWrapper");

class AuthController {
  static login =  asyncWrapper(async (req, res, next) => {
    res.send("login");
  });
  static register =  asyncWrapper(async (req, res, next) => {
    res.send("register");
  });
}
module.exports = AuthController;