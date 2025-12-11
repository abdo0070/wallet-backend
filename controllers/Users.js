const asyncWrapper = require("../middleware/asyncWrapper");

class UserController {
  static getAll = asyncWrapper(async (req, res, next) => {
    res.send("users");
  });
  static create = asyncWrapper(async (req, res, next) => {
    res.send("create");
  });
  static update = asyncWrapper(async (req, res, next) => {
    res.send("update");
  });
  static delete =  asyncWrapper(async (req, res, next) => {
    res.send("delete");
  });
}

module.exports = UserController;
