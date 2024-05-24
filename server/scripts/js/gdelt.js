const axios = require('axios');

const getGDELTEvents = async (query) => {
    const url= `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=artlist&format=json&maxrecords=10`;

    try{
        const response = await axios.get(url);
        return response.data.articles || [];
    }catch(error){
        console.error('Error fetching GDELT GKG events:', error);
        return null;
    }
};

const main = async () => { 
    const query = 'inflation sourcelang:english'; //query for GDELT
    const events = await getGDELTEvents(query); //fetch GDELT events
    const urls = [] //var to store vars
    events.forEach(event => { urls.push(event.url) });// foreach event push the url to urls
    return urls;
 };
 module.exports = main;