const {createClient} = require('redis');

const redisClient = createClient();

const connectRedis = async () => {
  await redisClient.connect();
  console.log('connected redis')
}

module.exports = {redisClient, connectRedis}