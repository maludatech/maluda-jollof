import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();
const port = 3000;

//handing image processing
const storage = multer.memoryStorage(); //stores the file in memory as a buffer
const upload = multer({storage: storage});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.set("strictQuery", true);


(async()=>{
    try{
        await mongoose.connect("mongodb+srv://Maluda-Tech:Ugochi3203@maludajollofcluster.mwtojeq.mongodb.net/MaludajollofDB"),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log(`CONNECTED TO MONGO!`);

        const postSchema = new mongoose.Schema({
            title: String,
            content: String,
            image: Buffer
        });

        const Post = mongoose.model("Post", postSchema);
    
app.get("/", async(req,res)=>{
    try{
        const posts = await Post.find();
        res.render("home.ejs", {posts: posts});
    }catch(error){
        console.log("sorry, having issues getting this route:" + error)
    }
});
app.get("/menu", (req,res)=>{
    res.render("menu.ejs");
});
app.get("/about", (req,res)=>{
    res.render("about.ejs");
});
app.get("/blog", (req,res)=>{
    res.render("blog.ejs");
});
app.get("/login", (req,res)=>{
    res.render("login.ejs");
});
app.post("/post", upload.single("image"),async(req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const image = req.file.buffer;
    const post = new Post({
        title: title,
        content: content,
        image: image
    });
        await post.save();
        res.redirect("/");
})
}catch(error){
    console.log(`OH NO! MONGO CONNECTION/QUERY ERROR!`);
    console.error(error);
}
}) ();

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
});