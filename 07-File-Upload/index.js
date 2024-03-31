const express =  require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;


//middleware express file upload
//npm i express-fileupload
app.use(express.json());

const fileupload = require("express-fieuppload");

app.use(fileupload());

const db = require("./config/database");
db.connect();


const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();




// route import and mount 
const upload = require("./routes/FileUpload");

app.use("/api/v1/upload",upload);

// Activate 
app.listen(PORT,() => {
    console.log("Server Run at ",PORT);
})

app.get("/", (req,res) => {
    res.send("<h1>File Upload App</h1>")
})