const x_router = require('express').Router();
const axios = require('axios');
const main = require('../scripts/js/gdelt');
const analyze_articles = require('../scripts/js/post_analysis');
require('dotenv').config();


async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
x_router.get('/x', async (req, res) => {
    const urls = await main();
    const resps = await Promise.all(urls.map(async (url) => {
        await timeout(5000);
        return analyze_articles(url);
    }));
});






module.exports = x_router;