
const messageModel = require('./messageModel.js');
const translate = require('./translate.js');


// const m = require('mongoose');
// var db = m.connect('mongodb://owner:root@ds239009.mlab.com:39009/linghacksstore');

// Schema = m.Schema;

//   var userSchema = new Schema({
//       name  :  { type: String, default: '' }
//     , password   :  { type: String, default: '' }
//   });

//   var userModel = m.model('User', userSchema);

//   var test = new userModel({name: "test", password: "test"});

//   console.log("me: " + test)

//   test.save(function (err, test) {
//     console.log("saved?")
//     if (err) {
//       console.log("error");
//       return console.error(err);
//     }
//     console.log("saved!")
//   });
//   console.log("after save");

var b = new messageModel('hello','fr','en');
console.log(b);
translate.trans(b);