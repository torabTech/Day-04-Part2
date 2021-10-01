const dbConnection = require('../db/connection');
getAll = (req,res) => {
    const db = dbConnection.get();
    const collection  = db.collection('games');

    collection.find().toArray(function(err,document){
    
        res.status(200).json(document.slice(0,6));
    });
  
   
}

getCounted = (req,res) => {
    const db = dbConnection.get();
    const collection  = db.collection('games');

    collection.find().toArray(function(err,document){
        
        if(req.params && parseInt(req.params.count)<=9){
            res.status(200).json(document.slice(0,req.params.count));
            return;
        }
        res.status(200).json(document.slice(0,6));
    });
  
   
}

module.exports = {
    getAll : getAll,
    getCounted : getCounted
}

