import express from "express";
import { test,updateUser, } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// user routes
router.get("/", test);
router.post("/update:/id",verifyToken,updateUser)
router.post('/update/:id', verifyToken, updateUser);

export default router;
