const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const journalSchema = new Schema({
  date: {type: Date,
    default: new Date()},
  title: String,
  content: String
});


module.exports = mongoose.model('Journal', journalSchema);
