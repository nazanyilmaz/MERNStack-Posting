const PostSchema = require("../models/post.js");

const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.find();
    res.status(200).json(getPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Post is deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
