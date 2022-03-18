const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//write todo
app.post("/todos", async(req, res) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos

//get a todo

//update todo

//delete todo

//listen call to port
app.listen(port, () => {
    console.log(`🌎 postgresql_to-do running on Port ${port}`)
})