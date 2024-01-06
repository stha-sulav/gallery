import { Schema, Types, model } from "mongoose";

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

postSchema.statics.isIdValid = (id) => {
  return Types.ObjectId.isValid(id);
};

export const Post = model("Post", postSchema);
