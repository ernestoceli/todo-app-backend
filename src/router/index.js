const express = require("express");
const { UserRouter } = require("./userRouter");
const { TaskRouter } = require("./taskRouter");
const { CollectionRouter } = require("./collectionRouter");
const appRouter = express.Router();

appRouter.use("/user", UserRouter);
appRouter.use("/task", TaskRouter);
appRouter.use("/collection", CollectionRouter);
module.exports = appRouter;
