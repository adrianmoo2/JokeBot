var Twit = require('twit'); //same thing as an import statement
var config = require('./config');
var joker = require('random-joke-getter')

var T = new Twit(config);
var jokeTweet = "ss";

var index = Math.floor(Math.random()*3);

//tweetJoke();
setInterval(tweetJoke, 1000*60*60*6);

function tweetJoke() {
    function whichToTweet(callback){
      switch(index) {
        case 0:
                joker.getDadJoke(function(joke){
                  jokeTweet = joke;
                  callback();
              });
          break;
        case 1:
            joker.getProgrammingJoke(function(joke) {
              jokeTweet = joke;
              callback();
            });
          break;
        case 2:
            joker.getRandomJoke(function(joke) {
              jokeTweet = joke;
              callback();
            });
          break;
        default:
          console.log("Error: something went wrong");
      }
    }
    whichToTweet(function () {
      var tweet = {
        status: jokeTweet
      }
  
      T.post('statuses/update', tweet, tweeted);
    
      function tweeted(err, data, response){
        if (err) {
          console.log("Error: something went wrong");
          console.log(err);
        } else {
          console.log("Tweeted!");
        }
      }
    });
}

//tweetJoke();

/*tweetJoke(function() {
  console.log(index);
  console.log("JokeTweet: " + jokeTweet);
});*/


/*function  tweetIt(txt) {

    var tweet = {
      status: txt
    }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
    if (err) {
      console.log("Error: something went wrong");
      console.log(err);
    } else {
      console.log("Tweeted!");
    }
  }
}*/
