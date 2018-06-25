const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/WeeklyChoreController");

router.get("/weeklyChores", list);
router.get("/weeklyChore/:id", show);
router.post("/weeklyChores", create);

module.exports = router;