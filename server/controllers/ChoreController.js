const ChoreModel = require("../models/ChoreModel");

module.exports.list = function list(req, res) {
  ChoreModel.find({}).exec()
  .then(task => {
    res.json(task);
  });
};

module.exports.show = function show(req, res) {
  ChoreModel.findById(req.params.id).exec()
  .then(task => {
    res.json(task);
  });
};

module.exports.create = function create(req, res) {
  const newTask = new ChoreModel(req.body);
  newTask.save()
  .then(savedTask => {
    res.json(savedTask);
  });
};