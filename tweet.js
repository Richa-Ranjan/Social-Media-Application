require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

// Twitter client setup using your keys
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

// Function to post a tweet
async function postTweet() {
  try {
    const { data } = await client.v2.tweet('🚀 Hello from my Node.js Twitter Bot!');
    console.log('✅ Tweet posted successfully:', data);
  } catch (error) {
    console.error('❌ Failed to post tweet:', error);
  }
}

postTweet();
