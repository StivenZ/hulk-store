import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
