const { Collection } = require("../mongo");

exports.createCollection = (req, res) => {
  const data = req.body;

  const newCollection = new Collection(data);

  newCollection
    .save()
    .then(() => res.status(200).json({ message: "Collection created" }))
    .catch((error) => res.status(500).json(error));
};

exports.findAllCollections = (req, res) => {
  Collection.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOneCollection = (req, res) => {
  const id = req.params.id;
  Collection.findById(id)
    .then((collection) => {
      res.status(200).json(collection);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateCollection = (req, res) => {
  const data = req.body;
  const id = req.params.id;

  Collection.findByIdAndUpdate(id, data)
    .then((collection) => {
      res.status(200).json({ message: `Collection with id: ${collection._id} has been modified` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteCollection = (req, res) => {
  const id = req.params.id;
  Collection.findByIdAndRemove(id)
    .then((collection) => {
      res.status(200).json({ message: `Collection with id: ${collection._id} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchCollection = (req, res) => {
  const query = req.body;
  Collection.find(query)
    .then((collections) => {
      res.status(200).json(collections);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
