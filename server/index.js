import express from "express";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://hharmony:acafinal1@ds249818.mlab.com:49818/house-harmony");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const dailyChoreRoutes = require("./routes/dailyChoreRoutes");
const weeklyChoreRoutes = require("./routes/weeklyChoreRoutes");

app.use(dailyChoreRoutes);
app.use(weeklyChoreRoutes);

const port = process.env.PORT || 3101;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});