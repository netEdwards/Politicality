const express = require('express');
const cors = require('cors');
const g_router = require('./routes/GDELT_API');
const axios = require('axios');
require('dotenv').config();

const app = express();  



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api', g_router);

const port = process.env.S_PORT;
app.listen(port, () => {
    console.log('Server is running on port ', port, 'at http://localhost:8082');
})