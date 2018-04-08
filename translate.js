// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');
const messageModel =  require('./messageModel');
 
// Your Google Cloud Platform project ID
const projectId = 'ling-200422';
 
// Instantiates a client
const translate = new Translate({
  keyFilename: '/home/cabox/workspace/ling1-1b359e4a3771.json',
  projectId: projectId,
});

function randomInt() {
  this.min = 0;
  this.max = 9999999;
  return Math.floor(Math.random() * (this.max - this.min)) + this.min;
}





class user {
  constructor(){
    //array  to store messages of the user from the database
    this.messages = [];
    this.userId = randomInt();}
  }


// // this how you make a message object.
// var b =  new messageModel('hello','fr','en');

var trans = function (m) {
  console.log(messageModel);
  console.log("HJGDHJGFUYGF")
  this.text =  m.text;
  this.target = m.target;
  this.original = m.original;
 
// Translates some text into Russian
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];
 
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}

module.exports = trans();

// trans(b);
// console.log(randomInt());

