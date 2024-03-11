const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const studentRoutes = require("./src/routes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})


app.use('/api/v1/students', studentRoutes);



app.listen(port, () => {
    console.log(`http://localhost:${port} is running`);
})