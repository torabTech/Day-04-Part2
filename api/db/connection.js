const MongoClient = require("mongodb").MongoClient;

const dburl = "mongodb://localhost:27017/gamesDB";

let _connection = null;

let open =function(){
    MongoClient.connect(dburl,function(err,client){
        if(err){
            console.log("Connection has been failed");
            return;
        }
        _connection = client.db('gamesDB');
        console.log("DB connection has been established...",_connection);
    });
}

let get = function(){
    return _connection;
}

module.exports = {
    open:open,
    get:get
}