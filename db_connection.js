
const mongoose = require('mongoose');

const massage = require('./massage');

const { DB_USER, DB_PASS, DB_HOST } = require('./constants');

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: DB_USER,
    pass: DB_PASS
};

mongoose
    .connect(url, options)
    .then(db => console.log(`connected to: ${db.connection.name}`))
    .catch(err => console.error('connection error: ', err));