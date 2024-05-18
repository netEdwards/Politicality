const express = require('express');
const cors = require('cors');
const x_router = require('./routes/X_API');
const axios = require('axios');
require('dotenv').config();

const app = express();  



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});
const authenticateApp = async () => {
    const url = `https://api.twitter.com/oauth2/token`
    try {
      const response = await axios.post(url, 
        'grant_type=client_credentials', 
        {
          headers: { 
            'Authorization': `Basic ${process.env.X_CON_64}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        }
      );
      return response.data.access_token;
    } catch (error) {
      console.error('Error authenticating app:', error);
      return null;
    }
  };

app.get('/authX', async (req, res) => {
    res.send(authenticateApp());
    console.log(res.data)
    console.log('X_BEARER_TOKEN:', await authenticateApp())
});

app.use('/api', x_router);

const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is running on port ', port, 'at http://localhost:8082');
})