const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const apiKey = '09e55170854546b78c500fc99a6dcd97';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index.ejs', {arrT:null, error:null})
})


app.post('/', function (req, res) {
  let station = req.body.mapid;
  console.log(station);
  let url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&mapid=${station}&outputType=JSON`;
  console.log(url);
  request(url, function (err, response, body){
    if(err) {
      res.render('index', {arrT:null, error: 'Sorry, there are no available trains at this time'});
    } else {
      let arrT = JSON.parse(body)
      if(arrT.ctatt == undefined) {
        res.render('index', {arrT: null, error: 'Sorrry, there is no available trains at this time'});
      } else {
        for(var i = 0; i < arrT.length; i++) {
          console.log(arrT.length)
          let dataText = `The arrival time for the ${arrT.ctatt.eta[i].rt} line towards ${arrT.ctatt.eta[i].destNm} at ${arrT.ctatt.eta[i].staNm} is ${arrT.ctatt.eta[i].arrT}.`;
        }
        res.render ('index', {arrT: dataText, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
