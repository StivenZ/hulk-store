import express from "express";
import {
  getItems,
  updateItem,
  deleteItem,
  createItem,
} from "./../controllers/item.controller.js";

import { protect } from "./../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", protect, createItem);
router.put("/:id", protect, updateItem);
router.delete("/:id", protect, deleteItem);

export default router;
