import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requied: true,
    },
    completed: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    SubTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubToDo",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("Todo", todoSchema);
