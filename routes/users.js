const express = require('express');
const { mongoClient } = require('../helpers/mongo');
const { ObjectId } = require('mongodb');
const { redisClient } = require('../helpers/redis');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const {db} = req.query

  if(db === 'mongo') {
    const start = new Date();
    const doc = await mongoClient.db().collection('users').findOne({_id: new ObjectId("647681faddb8dac13cb5ef84")})
    const end = new Date();

    res.json({doc, db: 'mongo', ms: end.valueOf() - start.valueOf()});
    return
  }

  // redis time
  const start = new Date();
  const doc = await redisClient.get('647681faddb8dac13cb5ef84')
  const end = new Date();

  res.json({doc, db: 'redis', ms: end.valueOf() - start.valueOf()});
});

module.exports = router;
