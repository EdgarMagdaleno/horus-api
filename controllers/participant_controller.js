// const participant          = require('../models').User;

const list = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    return res.send({success: true, participantes: ['edgar', 'luis']});
}
module.exports.list = list;

