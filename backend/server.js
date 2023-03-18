const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movieRoutes");
const cors = require("cors")

dotenv.config();

const PORT =  process.env.PORT;
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PWD)
console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true, dbName: 'movie_db'
}).then(() => {
    console.log("MongoDB Database Connected")
}).catch((err) => {
    console.log(err)
})

const allowList = [process.env.ALLOWED_URL_1,process.env.ALLOWED_URL_2];
// var corsOptionsDelegate = function (req, callback) {
//     var corsOptions = {
//       credentials: true,
//     };
  
//     if (allowList.indexOf(req.header("Origin")) !== -1) {
//       corsOptions.origin = true; // reflect (enable) the requested origin in the CORS response
//     } else {
//       corsOptions.origin = false; // disable CORS for this request
//     }
  
//     callback(null, corsOptions); // callback expects two parameters: error and options
//   };
  
// app.use(express.json())
// app.use(cors({...corsOptionsDelegate, methods: "*"}));

const corsOptions = {
    origin: ['http://localhost:3000',"https://nextflix-tl.vercel.app"],
    credentials: true,

}
app.use(cors(corsOptions));

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.use('/api/v1/movie', movieRouter);

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log(`Server Started on ${PORT}`);
})