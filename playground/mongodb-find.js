const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to connect to mongo db server');
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b8fcab41828f473b20a004b') 
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to connect to mongo db server');
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to connect to mongo db server');
    });

    //db.close();
});