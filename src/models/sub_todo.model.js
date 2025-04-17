import mongoose from "mongoose";

const SubtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requied: true,
    },
    completed: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("SubToDo", SubtodoSchema);
