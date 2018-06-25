import express from "express";
import mongoose from "mongoose";
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://hharmony:acafinal@final-project-gaat4.mongodb.net/test?retryWrites=true");

const dailyChoreRoutes = require("./routes/dailyChoreRoutes");
const weeklyChoreRoutes = require("./routes/weeklyChoreRoutes");

app.use(dailyChoreRoutes);
app.use(weeklyChoreRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});