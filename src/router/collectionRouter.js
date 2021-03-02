const express = require("express");
const { CollectionController } = require("../controller");

const CollectionRouter = express.Router();

CollectionRouter.post("/", CollectionController.createCollection);

CollectionRouter.get("/", CollectionController.findAllCollections);

CollectionRouter.get("/:id", CollectionController.findOneCollection);

CollectionRouter.post("/search", CollectionController.searchCollection);

CollectionRouter.put("/:id", CollectionController.updateCollection);

CollectionRouter.delete("/:id", CollectionController.deleteCollection);

module.exports = { CollectionRouter };
