import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import { homeRouter } from "./routes/home.js";
import { userRouter } from "./routes/user.js";
import { instrumentRouter } from "./routes/instruments.js";
import { publicRouter } from "./routes/forMail.js";
import { errorHandler, notFoundHandler } from "./middlewares/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

//Dbconnection
connectDB();

//api endpoints
app.use(homeRouter);
app.use("/admin/", userRouter);
app.use("/instruments", instrumentRouter);
app.use("/", publicRouter);
// error handling middlewares
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`app running on ${environment} mode at port ${PORT} `);
});
