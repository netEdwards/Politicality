require('dotenv').config();
const { JSDOM } = require('jsdom');
const Mercury = require('@postlight/mercury-parser')
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


  const fetchContent = async (url) => {
    try {
        console.log('Fetching article content:', url);
        const result = await Mercury.parse(url);
        return result;
    } catch (error) {
        console.error('Error fetching article content:', error);
        if (error.code === 'ESOCKETTIMEDOUT') {
            console.log('Request timed out. Returning null for this article.');
            return null;
        }
        throw error;
    }
}

const analyze_articles = async (data) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k", 
        messages: [{ role: "assistant", content: `Can you analyze this html article? ${data} \n if so then please provide short a summary. If not then just say NULL.`}],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0];
};

module.exports = { analyze_articles, fetchContent };
// openai analyze all tweets

