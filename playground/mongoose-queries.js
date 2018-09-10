const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo'); 

var id = '5b9618046a865e2c40306b10';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((doc) => {
    console.log(doc);
}).catch((e) => {
    console.log(e);
});


// Todo.findOne({
//     completed: false
// }).then((doc) => {
//     console.log(doc);
// });

// Todo.findById(id).then((doc) => {
//     console.log(doc);
// });