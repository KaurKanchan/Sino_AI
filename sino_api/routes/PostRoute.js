const express = require("express");
const router = express.Router();
const postModel = require("../models/Post");

/* GET posts listing */
router.get("/", async function (req, res) {
  try {
    const responseList = await postModel.find().exec();
    res
      .status(200)
      .send({ postsCount: responseList.length, results: responseList });
  } catch (err) {
    res.status(500).json({
      message: "Failed to get posts listing",
      error: errorTypes.INTERNAL_SERVER_ERROR,
    });
  }
});

/* ADD a new post */
router.post("/add", async function (req, res) {
  try {
    const newPost = await postModel.create(req.body); // Assumes req.body contains the user data
    res.status(201).json(newPost); // Respond with the newly created user object
  } catch (err) {
    res.status(500).json({
      message: "Failed to add a new post",
      error: err,
    });
  }
});

module.exports = router;
