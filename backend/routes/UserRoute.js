import express from "express";
import {
  followUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id/follow", followUser);

export default router;
