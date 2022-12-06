let express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");
let router = require("./router/router");
let mongoose = require("mongoose");
let app = express();
app.use(cors());
app.use(bodyparser.json());


app.use("/", router);

mongoose.connect("mongodb+srv://SANTHOSHKUMAR:7502221488S@cluster0.c3sul44.mongodb.net/Book-My-Show");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", function (req, res) {
  res.send("Welcome To Book My Show");
  
});
app.listen(8000, () => {
  console.log("listening on ", 8000);
 });
