import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    caption: {
      type: String,
    },
    photos: [
      {
        title: {
          type: String,
        },
        public_id: {
          type: String,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
