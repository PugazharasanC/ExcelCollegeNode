import { Router } from "express";
import {
  addUser,
  getAllUsers,
  getUser,
  removeUser,
  updateUser,
} from "../controllers/userController.js";
const userRouter = Router();

userRouter.route("/").get(getAllUsers).post(addUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(removeUser);

export default userRouter;
