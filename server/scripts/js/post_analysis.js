require('dotenv').config();
const OpenAI = require('openai');
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const analyze_articles = async (url) => {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k", 
        messages: [{ role: "system", content: `Print a 5 word scentence.`}],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.choices[0];
};

module.exports = analyze_articles;

// openai analyze all tweets

