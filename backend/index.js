import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./Routes/Posts.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRouter); // always defined it below cors
app.use("/", (req, res) => {
  res.send("Welcome to the social crud app.");
});
// const mongodb_connection_url =
//   "mongodb+srv://admin:admin123@cluster0.hdgyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongodb_connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running ${PORT}`)))
  .catch((err) => console.log(err, "***backend***"));
//mongoose.set("useFindAndModify", false);
