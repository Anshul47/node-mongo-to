var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlenght: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Eat dinner'
// });

// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log(e);
// });


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: 'anshul.reejonia@gmail.com'
});

newUser.save().then((doc) => {
    console.log(doc);
}, (e) => {
    console.log(e);
});