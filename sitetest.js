const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})
app.post('/', function (req, res) {
  console.log(req.body.ctatt.eta[i].staNm);
  res.render('index');
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const request = require('request');

const apiKey = '09e55170854546b78c500fc99a6dcd97';
const mapid = '40310';
const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&mapid=${mapid}&outputType=JSON`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
