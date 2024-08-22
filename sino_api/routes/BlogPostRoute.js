const express = require("express");
const router = express.Router();
const blogPostModel = require("../models/BlogPost");

/* GET blog posts listing */
router.get("/", async function (req, res) {
  try {
    const responseList = await blogPostModel.find().exec();
    res
      .status(200)
      .send({ postsCount: responseList.length, results: responseList });
  } catch (err) {
    res.status(500).json({
      message: "Failed to get posts listing",
      error: "Internal server error",
    });
  }
});

/* ADD a new blog post */
router.post("/post", async function (req, res) {
  try {
    const newPost = await blogPostModel.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({
      message: "Failed to add a new post",
      error: "Internal server error",
    });
  }
});

module.exports = router;
