import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
dotenv.config({ path: "config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// import all routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";

// connect database
connectDB();

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

app.use("/api/", AuthRoute);
app.use("/api/", UserRoute);
app.use("/api/", PostRoute);
