const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the MEVN Stack API!");
});

// Blog posts route
const BlogPostRouter = require("./routes/BlogPostRoute");
app.use("/blogPosts", BlogPostRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
