// const express = require('express')
// const app = express()
//
// const bodyParser = require('body-parser');
//
// app.use(bodyParser.urlencoded({ extend: true }));
//
// app.use(express.static('public'));
// app.set('view engine', 'ejs')
//
// app.get('/', function (req, res) {
//   res.render('index')
// })
//
// app.post('/', function (req, res) {
//   res.render('index');
//   console.log(req.body.ctatt.eta[i].staNm);
// })
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
//
// const request = require('request');
//
// const apiKey = '09e55170854546b78c500fc99a6dcd97';
// const mapid = '40310';
// const url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&mapid=${mapid}&outputType=JSON`;
//
// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     console.log('body:', body);
//   }
// });

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '09e55170854546b78c500fc99a6dcd97';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {mapid: null, error: null});
})

app.post('/', function (req, res) {
  let mapid = req.body.staId;
  let url = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${apiKey}&mapid=${mapid}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {mapid: null, error: 'Error, please try again'});
    } else {
      let station = body;
      console.log(station);
      // if(station.ctatt.eta[0].staId == undefined){
      //   res.render('index', {mapid: null, error: 'Error, please try again'});
      // } else {
      //   let stationText = `Arrival time for ${station.ctatt.eta[0].staId} is ${station.ctatt.eta[0].arrT}`;
      //   res.render('index', {mapid: stationText, error: null});
      // }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
