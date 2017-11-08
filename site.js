var data = [{
  "staId": "40380",
  "stpId": "30374",
  "staNm": "Clark\/Lake",
  "rt": "Blue",
  "destNm": "UIC-Halsted",
  "trDr": "5",
  "arrT": "2017-11-07T16:03:09",
  "isApp": "0",
  "isDly": "0",
  "heading": "123"
}, {
  "staId": "40381",
  "stpId": "30375",
  "staNm": "Clark\/Lake",
  "rt": "Blue",
  "destNm": "O'Hare",
  "trDr": "1",
  "arrT": "2017-11-07T16:11:11",
  "isApp": "0",
  "isDly": "0",
  "heading": "89"
}]

$('#locationform').on('submit', function(e) {
  var staNm = $('#location').val();
  if(data[staNm] !== undefined ) {
    $('#results').append('<li><a href="' + data[staNm]["arrT"] + '">' +
    staNm + '</a></li>');
  } else {
    $('#result').append('<li>' + staNm + ' not found: it may not be in the system yet; try "Galvin library"');
  }
  e.preventDefault();
});
$('#locationform').on('focus', function() {
    console.log('The station entered is not found. No "e"');
  });

var today = new Date();
var date = today.getFullYear() + ' '+ (today.getMonth()+1) + ' ' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
