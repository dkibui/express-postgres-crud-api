const express = require("express")
const router = express.Router()

//Get blogs
router.get("/", require("../controllers/blog.Controller").getAllBlogs)

//Get a blog by id
router.get("/:id", require("../controllers/blog.Controller").getBlogById)

//Post a blog
router.post("/", require("../controllers/blog.Controller").postOneBlog)

//Update a blog
router.put("/:id", require("../controllers/blog.Controller").updateOneBlog)

//Delete a blog
router.delete("/:id", require("../controllers/blog.Controller").getBlogById)

module.exports = router
