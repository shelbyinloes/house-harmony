const WeeklyChoreModel = require("../models/WeeklyChoreModel");

module.exports.list = function list(req, res) {
  WeeklyChoreModel.find({}).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.show = function show(req, res) {
  WeeklyChoreModel.findById(req.params.id).exec()
  .then(chore => {
    res.json(chore);
  });
};

module.exports.create = function create(req, res) {
  const newWeeklyChore = new WeeklyChoreModel(req.body);
  newWeeklyChore.save()
  .then(savedWeeklyChore => {
    res.json(savedWeeklyChore);
  });
};