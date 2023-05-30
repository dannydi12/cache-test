const {MongoClient} = require('mongodb');

const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/test');

const connectToDB = async () => {
  await mongoClient.connect();
  console.log('connected to mongo')
}

module.exports = {mongoClient, connectToDB}
