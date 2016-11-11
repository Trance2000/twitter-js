const express = require("express");
const nunjucks = require("nunjucks");
const app = express();


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


var conf = nunjucks.configure("views", {noCache: true});
nunjucks.render("index.html", locals, function(err, output) {
  if (err) {
    console.log(err);
  } else {
    console.log(output);
  }
});



app.engine("html", nunjucks.render);
app.set("view engine", "html");




app.use(function(req, res, next) {
  console.log("hello");
  next();
});


app.get('/', function (req, res) {
  // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', locals );
});

app.get('/news', function (req, res) {
  res.send("NEWS");
});

// app.use(function(req, res, next) {
//   console.log('welcome');
//   next();
// });

app.get('/is-anybody-in-there', function (req, res, next) {
  res.send('YES!!');

});

// app.get('/is-anybody-in-there/special', function (req, res, next) {
//   res.send('this is a special area');
//   next();
// });

// app.post('/is-anybody-in-there', function (req, res, next) {
//   req.send("hi");
//   res.send("hello");
// });

app.listen( 3000, function(){
  console.log("server listening");
});
