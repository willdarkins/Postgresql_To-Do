const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//listen call to port
app.listen(port, () => {
    console.log(`🌎 postgresql_to-do running on Port ${port}`)
})