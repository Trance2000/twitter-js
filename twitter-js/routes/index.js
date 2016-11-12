

const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");
// const app = express();
// const path = require('path');






// router.get("/stylesheets/style.css", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/stylesheets/style.css"));
// });



// const respondWithAllTweets = (req, res, next) => {
//     const allTheTweets = tweetBank.list();
//     res.render('index', {
//       title: 'Twitter.js',
//       tweets: allTheTweets,
//       showForm: true
//     });
//   };
//
//   router.get("/", respondWithAllTweets);



router.get("/", function(req, res,next) {
  var tweets = tweetBank.list();
  res.render("index", { title: "Twitter.js", tweets: tweets, showForm: true } );
});

module.exports = router;
