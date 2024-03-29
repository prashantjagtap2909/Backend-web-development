

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json)  // adding middleware  

app.listen(port, () =>{
    console.log("Example app started on port 3000")
}); 


