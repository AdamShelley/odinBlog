const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const blogRoutes = require("./routes/blogRoutes");
const { Mongoose } = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Routes
app.use("/blogs", blogRoutes);

// START SERVER
const PORT = process.env.PORT || 4000;

mongoose
  .connect(
    `mongodb+srv://adam:${process.env.MONGODB_PASSWORD}@cluster0.pbo6m.mongodb.net/odinBlog?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`.yellow.bold);
    });
  })
  .catch((err) => {
    console.log(err);
  });
