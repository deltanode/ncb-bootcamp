const express = require('express')
const mongoose = require('mongoose')
const path = require("path")
const methodOverride = require("method-override")
const router = require("./routers/router")
const seedDB = require("./seed")

mongoose
    .connect('mongodb://localhost:27017/blogApp', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify : false})
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log("Connection Error: ",err)
    })

const app = express()

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

// Router
app.use(router)

// Seed Database
// seedDB()

app.listen("3000", ()=>{
    console.log("Server started at port 3000")
})