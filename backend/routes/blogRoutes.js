const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogControllers");

// GET ALL BLOG POSTS
router.get("/", blogControllers.getAllPosts);
// GET SINGLE BLOG POST
router.get("/:id", blogControllers.getBlogPostByID);
// GET BLOG POSTS FOR A CERTAIN USER
router.get("/:uid", blogControllers.getPostsByUser);
// CREATE BLOG POST
router.post("/", blogControllers.createBlogPost);
// EDIT BLOG POSTS

// DELETE BLOG POSTS

module.exports = router;
