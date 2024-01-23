import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB !");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB !", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000 !");
});
