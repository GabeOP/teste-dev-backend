const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:123@cluster0.9kbj2tm.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database connected!"))
    .catch((error) => console.log(error));
};

module.exports = connectDb;