const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/DailyChoreController");

router.get("/dailyChores", list);
router.get("/dailyChore/:id", show);
router.post("/dailyChores", create);

module.exports = router;