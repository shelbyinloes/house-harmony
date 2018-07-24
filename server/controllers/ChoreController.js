const ChoreModel = require("../models/ChoreModel");

module.exports.list = function list(req, res) {
  ChoreModel.find({}).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.show = function show(req, res) {
  ChoreModel.findById(req.params.id).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.create = function create(req, res) {
  const newChore = new ChoreModel(req.body);
  newChore.save()
  .then(savedChore => {
    res.json(savedChore);
  });
};