import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var postArr = [];

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs", {
        currentPage: ["currentPage","",""],
    })
})

app.get("/new-post", (req, res) => {
    res.render("new-post.ejs")
})
app.post("/create", (req, res) => {
    postArr.push({
        postTitle: req.body["title"],
        postContent: req.body["postContent"]
    })
    res.redirect("/my-posts")
})

app.get("/my-posts", (req, res) => {
    res.render("my-posts.ejs", {
        currentPage: ["", "currentPage", ""],
        postArr: postArr,
        removeImage: "removeImage"
    });
})

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        currentPage: ["", "", "currentPage"]
    })
})

app.listen(port, (req, res) => {
    console.log("Running server on port ", port)
})