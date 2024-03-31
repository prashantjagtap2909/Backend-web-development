

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json)  // adding middleware  

app.get("/", (req, res) =>{
    res.send(`<h1>Hello World.....!</h1>`)
});

app.post("/car", (req, res) =>{
    console.log("App Started")
});

app.listen(port, () =>{
    console.log("Example app started on port 3000")
}); 


