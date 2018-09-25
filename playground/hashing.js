const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 4
};

var token = jwt.sign(data, '123abc')
var decoded = jwt.verify(token, '123abc');

// var msg = 'I am user no 3';

// var hash  = SHA256(msg).toString();

// console.log(`Msg:  ${msg}`);
// console.log(`HASH:  ${hash}`);


// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').token();