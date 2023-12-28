import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var postArr = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentPage: ["currentPage", "", ""],
  });
});
//todos:
//1. Turn this page to a book review page
//2. make the home page scrollable with all the content going there
//3. Add a database to the project with every user has his own account (this will need a sign in page too)
//4. the 'My Blogs' page should contain blogs uploaded by the current user
//5. Edit this current user thing to be handled with CSS

// -> Make a content area and that's where the posts will go both on the main page and the my posts page
app.get("/new-post", (req, res) => {
  res.render("new-post.ejs");
});
app.post("/create", (req, res) => {
  const date = new Date().toString().split(" ").slice(1, 4).join("-");
  postArr.push({
    title: req.body.title,
    content: req.body.postContent,
    date: date,
  });
  res.redirect("/my-posts");
});

app.get("/my-posts", (req, res) => {
  res.render("my-posts.ejs", {
    currentPage: ["", "currentPage", ""],
    posts: postArr,
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    currentPage: ["", "", "currentPage"],
  });
});

app.listen(port, (req, res) => {
  console.log("Running server on port ", port);
});
