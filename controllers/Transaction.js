const asyncWrapper = require("../middleware/asyncWrapper");

class TransactionController {
  static getAll = asyncWrapper(async (req, res, next) => {
    res.send("transactions");
  });
  static getTransaction = asyncWrapper(async (req, res, next) => {
    res.send("transaction");
  });
  static create =  asyncWrapper(async (req, res, next) => {
    res.send("create");
  });
  static update =  asyncWrapper(async (req, res, next) => {
    res.send("update");
  });
  static delete =  asyncWrapper(async (req, res, next) => {
    res.send("delete");
  });
}

module.exports = TransactionController;