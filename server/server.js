const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//listen call to port
app.listen(port, () => {
    console.log(`🌎 postgresql_to-do running on Port ${port}`)
})