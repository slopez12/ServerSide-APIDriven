//var data = {
//   "40380": {
//     "staId": "40380",
//     "stpId": "30374",
//     "staNm": "Clark\/Lake",
//     "rt": "Blue",
//     "destNm": "UIC-Halsted",
//     "trDr": "5",
//     "arrT": "2017-11-07T16:03:09",
//     "isApp": "0",
//     "isDly": "0",
//     "heading": "123"
//   },
//   "40380": {
//     "staId": "40380",
//     "stpId": "30375",
//     "staNm": "Clark\/Lake",
//     "rt": "Blue",
//     "destNm": "O'Hare",
//     "trDr": "1",
//     "arrT": "2017-11-07T16:11:11",
//     "isApp": "0",
//     "isDly": "0",
//     "heading": "89"
//   }
// }

var data = `{"ctatt":{"tmst":"2017-11-15T17:45:30","errCd":"0","errNm":null,"eta":[{"staId":"40310","stpId":"30060","staNm":"Western","stpDe":"Service toward Loop","rn":"718","rt":"Org","destSt":"0","destNm":"Loop","trDr":"1","prdt":"2017-11-15T17:45:21","arrT":"2017-11-15T17:51:21","isApp":"0","isSch":"1","isDly":"0","isFlt":"0","flags":null,"lat":null,"lon":null,"heading":null},{"staId":"40310","stpId":"30061","staNm":"Western","stpDe":"Service toward Midway","rn":"715","rt":"Org","destSt":"30182","destNm":"Midway","trDr":"5","prdt":"2017-11-15T17:45:15","arrT":"2017-11-15T17:54:15","isApp":"0","isSch":"0","isDly":"0","isFlt":"0","flags":null,"lat":"41.84689","lon":"-87.64815","heading":"243"},{"staId":"40310","stpId":"30061","staNm":"Western","stpDe":"Service toward Midway","rn":"723","rt":"Org","destSt":"30182","destNm":"Midway","trDr":"5","prdt":"2017-11-15T17:45:10","arrT":"2017-11-15T17:55:10","isApp":"0","isSch":"0","isDly":"0","isFlt":"0","flags":null,"lat":"41.85575","lon":"-87.63499","heading":"230"},{"staId":"40310","stpId":"30060","staNm":"Western","stpDe":"Service toward Loop","rn":"725","rt":"Org","destSt":"0","destNm":"Loop","trDr":"1","prdt":"2017-11-15T17:45:21","arrT":"2017-11-15T17:59:21","isApp":"0","isSch":"1","isDly":"0","isFlt":"0","flags":null,"lat":null,"lon":null,"heading":null},{"staId":"40310","stpId":"30061","staNm":"Western","stpDe":"Service toward Midway","rn":"716","rt":"Org","destSt":"30182","destNm":"Midway","trDr":"5","prdt":"2017-11-15T17:45:16","arrT":"2017-11-15T18:03:16","isApp":"0","isSch":"0","isDly":"0","isFlt":"0","flags":null,"lat":"41.88202","lon":"-87.62616","heading":"178"}]}}`;

data = JSON.parse(data);

for (var i = 0; i < data.ctatt.eta.length; i++) {
  console.log(data.ctatt.eta[i].rt + data.ctatt.eta[i].destNm + data.ctatt.eta[i].arrT);



}

$('#locationform').on('submit', function(e) {
  console.log("Form submitted!");
  var location = $('#location').val();
  console.log("Location is " + location);
  var trainline = $('#trainline').val();
  console.log("Trainline is " + trainline);


  if(data[location] !== undefined ) {
    $('#results').append('<li><a>' + data.ctatt.eta[i].arrT + '</a></li>');
    console.log("The arrival time for the " + data[location]["rt"] + " line train heading "
    + data[location]["trDr"] + " is " + data[location]["arrT"] );
  } else {
    $('#result').append('<li>' + location + ' not found');
    console.log("Station has no arrivals");
  }
  e.preventDefault();
});
