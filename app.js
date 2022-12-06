const express = require("express");
const mongoose = require("mongoose");
const PORT = 7777;
const app = express();
const bodyParser = require('body-parser')

app.set("view engine", "ejs");
app.set("views", "./views")

app.use(express.static('static'));
app.use("/static",express.static("static"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//database connection
const connectionString = "mongodb://127.0.0.1:27017/crudApp";
mongoose
    .connect(connectionString)
    .then((res) => console.log("Database Connected"))
    .catch((err) => console.log("Error:" + err));
    
//end connection

const mainRoutes = require("./routes/employees");


app.use("/", mainRoutes);


app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Work on ${PORT}`);
});