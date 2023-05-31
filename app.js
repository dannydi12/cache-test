const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const {connectToDB} = require('./helpers/mongo')
const { connectRedis } = require('./helpers/redis');

connectToDB()
connectRedis()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
