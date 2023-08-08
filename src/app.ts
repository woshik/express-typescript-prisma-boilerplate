import express from "express";
import helmet from "helmet";
import cors from "cors";
import router from "@/routes/v1/index";

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

// v1 api routes
app.use("/v1", router);

export default app;
