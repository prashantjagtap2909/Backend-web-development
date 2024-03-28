const mongoose = require("mongoose");


require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connection successfull"))
    .catch((error) => {
        console.log("Error occurred....!")
        console.error(error.message);
        process.exit(1);
    } );
} 


module.exports = dbConnect;
