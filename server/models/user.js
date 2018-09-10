var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var newUser = new User({
//     email: 'anshul.reejonia@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log(doc);
// }, (e) => {
//     console.log(e);
// });

module.exports = {User};