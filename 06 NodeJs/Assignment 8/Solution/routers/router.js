const express = require("express")
const Blog = require("../models/blog")
const router = express.Router()

// landing page
router.get("/", async (req,res)=>{
    const blogs = await Blog.find({})
    res.render("index", {blogs})
})

// home page
router.get("/blog",async (req,res)=>{
    const blogs = await Blog.find({})
    res.render("blog/blog", {blogs})
})

// form to create blog
router.get("/blog/new",(req,res)=>{
    res.render("blog/new")
})

// create blog
router.post("/blog", (req,res)=>{
    res.send("Blog created")
})

// View single blog
router.get("/blog/:id", (req,res)=>{
    res.render("blog/blog-single")
})



module.exports = router