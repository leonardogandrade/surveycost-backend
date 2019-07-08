const mongoose = require('mongoose');
const Survey = mongoose.model('Survey');

module.exports = {
    async voteAgree(req,res){
        const id = '5d23a90e1924a2b756f29489';
        const vote = await Survey.findById(id);
        const { agree, disagree } = req.body;
        vote.agree += parseInt(agree);
        vote.disagree += parseInt(disagree);
        vote.save();
        return res.json(vote);
    },

    async create(req,res){
        const response = await Survey.create(req.body);
        return res.json(response);
    },

    async listAll(req,res){
        const response = await Survey.find();
        return res.json(response);
    }
}