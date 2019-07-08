const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    ip : String,

        agree : Number,
        disagree : Number

},{
    timestamps : true
});

module.exports = mongoose.model('Survey',SurveySchema);