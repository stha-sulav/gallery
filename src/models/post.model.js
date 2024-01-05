import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    caption: {
      type: String,
    },
    photos: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
