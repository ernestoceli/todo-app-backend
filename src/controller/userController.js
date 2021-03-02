const { User } = require("../mongo");

exports.findAll = (req, res) => {
  const findUserSuccess = (data) => {
    res.status(200).json(data);
  };

  const findUserError = (error) => {
    res.status(500).json(error);
  };
  User.find().then(findUserSuccess).catch(findUserError);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.createUser = (req, res) => {
  const data = req.body;

  const newUser = new User(data);

  newUser
    .save()
    .then(() => res.status(200).json({ message: `User ${data.name} created` }))
    .catch((error) => res.status(500).json(error));
};

exports.updateUser = (req, res) => {
  const data = req.body;
  const id = req.params.id;

  User.findByIdAndUpdate(id, data)
    .then((user) => {
      res.status(200).json({ message: `${user.name} has been modified` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then((user) => {
      res.status(200).json({ message: `${user.name} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchUser = (req, res) => {
  const query = req.body;
  User.find(query)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
