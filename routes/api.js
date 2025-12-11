const AuthController = require("../controllers/Auth");
const TransactionController = require("../controllers/Transaction");
const UserController = require("../controllers/Users");

const router = require("express").Router();

// Auth
router.post("/login",AuthController.login)
router.post("/register",AuthController.register)

// Users 
router.get("/users", UserController.getAll);
router.post("/users", UserController.getAll);
router.put("/users", UserController.getAll);
router.delete("/users", UserController.getAll);

// Transactions
router.get("/transactions", TransactionController.getAll);
router.get("/transactions/:id", TransactionController.getTransaction);
router.post("/transactions", TransactionController.getAll);
router.put("/transactions", TransactionController.getAll);
router.delete("/transactions", TransactionController.getAll);


module.exports = router;
