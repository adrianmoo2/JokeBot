var Twit = require('twit'); //same thing as an import statement

var config = require('./config');
var T = new Twit(config);


function  tweetIt() {
  var tweet = {
    status: '#Chong suck!!!'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if (err) {
      console.log("ERROR HAHA");
    } else {
      console.log("My first Tweet!");
    }
  }
}
