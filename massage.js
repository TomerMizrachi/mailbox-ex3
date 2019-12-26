const connect = require('./db_connection');

const { Schema, model } = require('mongoose');

const massageSchema = new Schema({
    massageNumber: {type: Number, require: true},
    senderName: { type: String, required: true },
    receiverName: { type: String, required: true },
    massageContent: String
}, { collection: 'massage' });

const massage = model('massage', massageSchema);

module.exports = massage;