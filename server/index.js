import express from "express";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://hharmony:acafinal1@ds249818.mlab.com:49818/house-harmony", {
  useMongoClient: true
});

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
// app.use(express.static('public'));

const dailyChoreRoutes = require("./routes/DailyChoreRoutes");
const weeklyChoreRoutes = require("./routes/WeeklyChoreRoutes");

app.use(dailyChoreRoutes);
app.use(weeklyChoreRoutes);

const port = process.env.PORT || 3101;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});