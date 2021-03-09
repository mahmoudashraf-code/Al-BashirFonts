const express = require("express");
const { join } = require("path");
const app = express();
let port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("dist"));
app.use("/api/blog", require("./router/blog"));


app.get("/*", (req, res) => {
    res.sendFile(join(__dirname, "dist", "index.html"));
})

app.listen(port, () => {
    console.log("http://127.0.0.1:3000")
})