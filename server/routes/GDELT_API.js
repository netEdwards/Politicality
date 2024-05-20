const g_router = require('express').Router();
const axios = require('axios');
const main = require('../scripts/js/gdelt');
const analyze_articles = require('../scripts/js/post_analysis');
require('dotenv').config();



g_router.get('/gdelt', async (req, res) => {
    main().then(urls => {
        res.send(urls);
    }).catch(err => console.error("ERROR IN GDELT: ",err));
});






module.exports = g_router;