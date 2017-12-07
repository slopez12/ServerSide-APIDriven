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
  let station = req.body.station;
  console.log(station);
  let url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&mapid=${station}&outputType=JSON`;
  console.log(url);
  request(url, function (err, response, body){
    if(err) {
      res.render('index.ejs', {arrT:null, error: 'Sorry, there are no available trains at this time'});
    } else {
      let arrT = JSON.parse(body)
      console.log(arrT.ctatt.eta.length)
      for(var i = 0; i < arrT.ctatt.eta.length; i++) {
        let dataText = `The arrival time for the ${arrT.ctatt.eta[i].rt} line towards ${arrT.ctatt.eta[i].destNm} at ${arrT.ctatt.eta[i].staNm} is ${arrT.ctatt.eta[i].arrT}.`;
        console.log(dataText);
      }
      let dataText = `The arrival time for the ${arrT.ctatt.eta[0].rt} line towards ${arrT.ctatt.eta[0].destNm} at ${arrT.ctatt.eta[0].staNm} is ${arrT.ctatt.eta[0].arrT}.`;
      res.render ('index.ejs', {arrT:dataText, error: null});
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
