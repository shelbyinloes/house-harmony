const DailyChoreModel = require("../models/DailyChoreModel");

module.exports.list = function list(req, res) {
  DailyChoreModel.find({}).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.show = function show(req, res) {
  DailyChoreModel.findById(req.params.id).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.create = function create(req, res) {
  const newDailyChore = new DailyChoreModel(req.body);
  newDailyChore.save()
  .then(savedDailyChore => {
    res.json(savedDailyChore);
  });
};