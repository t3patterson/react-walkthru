let express = require('express');
let app = express();
let bodyParser = require('body-parser'); 

let mongoose = require('mongoose'),
    Schema = mongoose.Schema

const PORT = process.env.PORT || 3000




// got env port for heroku or elsewhere, else set to 3000 for dev
app.set('port', PORT)

app.use( express.static( __dirname + '/dist/assets') )

app.set('views', './dist/views')
app.set('view engine','ejs')

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// --------------mongoose-------------
const db = mongoose.connect('mongodb://localhost/dessertsAPI');

let dessertSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  uploadDate: Date
})

let DummyModel = mongoose.model('Dummy', dessertSchema)

$.ajax({
  url: '/api/v1/products',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    
  }
}).then

app.get('/api/v1/products', function(req, res){
  DummyModel.find({}, function(err, results){
        if(err) res.status(500).send(err)  // (4)
          else res.json(results) // (5)
      })
})

app.post('/api/v1/products', function(req, res){

  req.body.uploadedAt = new Date()

  let newRecord = new DummyModel(req.body)

  newRecord.save()

  res.status(201).send(newRecord)

})

// ------------------------


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