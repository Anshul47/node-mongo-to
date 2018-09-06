//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Eat Lunch',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to mongo db server ' , err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     Name: 'Ruchi',
    //     age: 29
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to mongo db server ' , err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});