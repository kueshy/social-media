import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((con) =>
      console.log(
        `MongoDB connected and running on HOST:${con.connection.host}`
      )
    )
    .catch((error) => console.log(error.message));
};

export default connectDB;
