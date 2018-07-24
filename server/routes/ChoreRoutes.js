const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/ChoreController");

router.get("/Chores", list);
router.get("/Chore/:id", show);
router.post("/Chores", create);

module.exports = router;