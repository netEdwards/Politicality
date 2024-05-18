const axios = require('axios');

const getGDELTEvents = async (query) => {
    const url= `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=artlist&format=json`;

    try{
        const response = await axios.get(url);
        return response.data.articles;
    }catch(error){
        console.error('Error fetching GDELT events:', error);
        return null;
    }
};

const main = async () => { 
    const query = 'politics sourcecountry:US';
    const events = await getGDELTEvents(query);
    const urls = []
    events.forEach(event => { urls.push(event.url) });
    return urls;
 };
 module.exports = main;