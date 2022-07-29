import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    post: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
