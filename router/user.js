const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user");

userRouter.get("/search", userController.search);

userRouter.post("/create", userController.create);

userRouter.patch("/update", userController.update);

userRouter.get("/:id", userController.view);

userRouter.delete("/:id", userController.delete);

module.exports = userRouter;