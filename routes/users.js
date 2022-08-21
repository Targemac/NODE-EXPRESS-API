import express, { request } from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// initializing our router
const router = express.Router();


// all routes in here are starting with /users
router.get("/", getUsers);

// sending data from front-end to server
router.post("/", createUser);

// the ':' sign measns we are expecting anything after the users path
// e.g; to retrive the value of '/users/2', we use the 'req.params {id:2}'
router.get("/:id", getUser);

// implementing the delete route to delete users
router.delete("/:id", deleteUser);

// to do a partial update
router.patch("/:id", updateUser);

export default router;
