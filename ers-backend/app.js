const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors")

const errorMiddleware = require("./middleware/error")

app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Route imports
const user = require("./routes/userRoute");
app.use("/api/v1",user);


//Middleware for errors
app.use(errorMiddleware);

module.exports= app;