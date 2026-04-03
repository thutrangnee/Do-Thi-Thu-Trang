import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;



// Đảm bảo server tìm đúng thư mục views dù chạy ở bất cứ đâu
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/next",(req,res) =>{
  res.render("index.ejs")
})

app.get("/about",(req,res) =>{
  res.render("about.ejs")
})

// app.get("/contact",(req,res) =>{
//   res.render("contact.ejs")
// })

app.get("/project",(req,res) =>{
  res.render("project.ejs")
})

app.get("/skills",(req,res) =>{
  res.render("skills.ejs")
})

app.post("/next",(req,res) => {
    const password = req.body["password"]
    if (password === "23112006"){
        res.render("index.ejs");
    }else{
        res.sendFile(__dirname + "/index.html");
    }
    
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});