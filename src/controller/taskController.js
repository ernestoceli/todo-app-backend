const { Task } = require("../mongo");

exports.createTask = (req, res) => {
  const data = req.body;

  const newTask = new Task(data);

  newTask
    .save()
    .then(() => res.status(200).json({ message: "Task created" }))
    .catch((error) => res.status(500).json(error));
};

exports.findAllTasks = (req, res) => {
  Task.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.findOneTask = (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updateTask = (req, res) => {
  const data = req.body;
  const id = req.params.id;

  Task.findByIdAndUpdate(id, data)
    .then((task) => {
      res.status(200).json({ message: `Task with id: ${task._id} has been modified` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteTask = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndRemove(id)
    .then((task) => {
      res.status(200).json({ message: `Task with id: ${task._id} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.searchTask = (req, res) => {
  const query = req.body;
  Task.find(query)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.deleteByCollectionId = (req, res) => {
  const query = req.body;
  Task.deleteMany(query)
    .then((task) => {
      res
        .status(200)
        .json({ message: `Tasks with parentId: ${task.parentCollection} has been deleted` });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
