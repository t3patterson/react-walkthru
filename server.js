"use strict"

let express = require('express');
let app = express();
let bodyParser = require('body-parser'); 

const PORT = process.env.PORT || 3000




// got env port for heroku or elsewhere, else set to 3000 for dev
app.set('port', PORT)

app.use( express.static( __dirname + '/dist/assets') )

app.set('views', './dist/views')
app.set('view engine','ejs')

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );


// get the page

app.get('/admin', function(req, res){
  res.render('admin')
})

app.get('/', function (req, res) {
  res.render('index');
});


app.listen(PORT,function() {
	console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})