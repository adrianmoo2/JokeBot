var Twit = require('twit'); //same thing as an import statement
var config = require('./config');

var T = new Twit(config);

//Commented below is the followed functionality. Believe that the stream functionality is deprecated, so can no longer implement this complexity.

/*
//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

function followed(event){

  var name=event.source.name;
  var screenName=event.source.screen_name;
  tweetIt('@'+screenName+' we are cool cats');

  var cmd = 'processing-java --sketch=C:\\Users\\Adrian\\Documents\\Processing\\Sketches\\Blue_rain\\twitter_cow --run';
  exec(cmd, processing);

  console.log('processing-java --sketch=C:\\Users\\Adrian\\Documents\\Processing\\Sketches\\Blue_rain\\twitter_cow --run');

  function processing() {
    var filename = 'twitter-cow\\twitter-cow.png'
    var params = {
      encoding: 'base64'
    }
    var b64 = fs.readFileSync(filename, params);

    T.post('media/upload', {media_data: b64}, uploaded) //uploaded = callback

    function uploaded(err, data, response) {
      //Tweet
      var id = data.media_id_string;
      var tweet = {
        status: '@ ' + screenName + 'Thanks for follow! Here is Twitter Cow as reward.',
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted);

    }
  }
}*/

var jokes = ["Did you hear about the restaurant on the moon? Great food, no atmosphere",
"What do you call a fake noodle? An Impasta.",
"How many apples grow on a tree? All of them.",
"Want to hear a joke about? Nevermind it's tearable.",
"I just watched a program about beavers. It was the best damn program I've ever seen.",
"Why did the coffee file a police report? It got mugged",
"How does a penguin build its house? Igloos it together.",
"What do you call a Mexican who lost his car? Carlos.",
"Why did the scarecrow win an award? Because he was outstanding in his field.",
"Why don't skeletons ever go trick or treating? Because they have no body to go with."];

//tweetIt(jokes[index]);
setInterval(tweetJoke, 1000*60)

function tweetJoke() {
    var index = Math.floor(Math.random()*jokes.length);
    var tweet = {
      status: jokes[index]
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
}

function  tweetIt(txt) {

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
}
