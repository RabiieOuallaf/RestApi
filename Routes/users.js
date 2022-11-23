import express from "express";
import { deleteUser, getUserByid, getUsers, patchUser, postUser } from "../controllers/users.js";

const router = express.Router();



router.get("/" , getUsers);

router.post("/", postUser);

router.patch("/:id" , patchUser);

router.get("/:id", getUserByid);

router.delete("/:id", deleteUser);

export default router;