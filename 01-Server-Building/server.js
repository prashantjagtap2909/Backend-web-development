
//Initiation of server
const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());


//activate server 
app.listen(3000, () =>{
    console.log("Server started on port 3000")
});

//Routes
app.get('/' , (request, responce) =>{
    responce.send("Hello World")
});

app.post('/api/cars' , (request, responce) =>{
    const {name, brand} = request.body; 
    console.log(name);
    console.log(brand);
    console.log("Car submmited successfully");
});


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase,', {
    useNewUrlParser:true,
    useUnifiedTopology:true

})
.then(() =>{
   console.log("connection successful") 
})
.catch((error) =>{
    console.log("Received an error")
});