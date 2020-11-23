const HttpError = require("../models/http-error");
const Post = require("../models/postModel");

// Get all blog posts
const getAllPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Post.find({}).sort({ created_at: -1 });
  } catch (error) {
    return next(HttpError(error));
  }

  res.status(200).json({ data: posts });
};
// Get all blog posts for a certain user
const getPostsByUser = async (req, res, next) => {
  res.send("users posts");
};

// GET SINGLE blog post by Id
const getBlogPostByID = async (req, res, next) => {
  const postId = req.params.id;

  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    return next(HttpError(err));
  }

  res.status(200).json({ data: post });
};

// Create blog post
const createBlogPost = async (req, res, next) => {
  const { title, body, user, summary } = req.body;
  console.log(title, body, user);
  let post = new Post({
    title,
    body,
    user,
    summary,
    postedYet: false,
  });

  try {
    await post.save();
    console.log("Successfully created blog post");
  } catch (error) {
    console.log(error);
  }

  res.status(201).json({ data: post });
};

// Edit blog posts

// Delete blog posts

exports.getAllPosts = getAllPosts;
exports.getPostsByUser = getPostsByUser;
exports.getBlogPostByID = getBlogPostByID;
exports.createBlogPost = createBlogPost;
