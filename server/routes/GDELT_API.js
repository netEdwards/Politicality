const g_router = require('express').Router();
const axios = require('axios');
const main = require('../scripts/js/gdelt');

const {fetchContent, analyze_articles} = require('../scripts/js/post_analysis');
require('dotenv').config();



g_router.get('/gdelt', async (req, res) => {
    const urls = await main();
    res.json(urls);//an array of urls
});
module.exports = g_router;



// const data = await Promise.all(urls.map(async (url) => {
//     const content = await fetchContent(url);
//     return content ? content.content : null;
// }));