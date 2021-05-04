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
    res.render("blog/home", {blogs})
})

// form to create blog
router.get("/blog/new",(req,res)=>{
    res.render("blog/new")
})

// create blog
router.post("/blog", async (req,res)=>{
    await Blog.create(req.body)
    res.redirect("/blog")
})

// View single blog
router.get("/blog/:id", async (req,res)=>{
    const blog = await Blog.findById(req.params.id)
    res.render("blog/blog-single",{blog})
})

// form to edit blog
router.get("/blog/:id/edit",async (req,res)=>{
    const blog = await Blog.findById(req.params.id)
    res.render("blog/edit", {blog})
})

// Update blog
router.patch("/blog/:id",async(req,res)=>{
    await Blog.findByIdAndUpdate(req.params.id,req.body)
    res.redirect(`/blog/${req.params.id}`)
})

// Delete blog
router.delete("/blog/:id",async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id)
    res.redirect("/blog")
})


module.exports = router