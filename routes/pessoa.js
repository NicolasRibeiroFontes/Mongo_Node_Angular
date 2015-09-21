var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/pessoa", {native_parser: true});

exports.cadastrar = function(req,res){
    db.collection('pessoa').insert(req.body, function(err,ok){
        res.send('ok');
    })
};

exports.retornar = function(req, res){
    db.collection('pessoa').find().toArray(function(err,pessoas){
        res.send(pessoas);
    })
};