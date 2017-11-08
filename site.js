var data = {
  "40380": {
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
  },
  "40380": {
    "staId": "40380",
    "stpId": "30375",
    "staNm": "Clark\/Lake",
    "rt": "Blue",
    "destNm": "O'Hare",
    "trDr": "1",
    "arrT": "2017-11-07T16:11:11",
    "isApp": "0",
    "isDly": "0",
    "heading": "89"
  }
}

$('#locationform').on('submit', function(e) {
  console.log("Form submitted!");
  var location = $('#location').val();
  console.log("Location is " + location);
  var trainline = $('#trainline').val();
  console.log("Trainline is " + trainline);
  if(data[location] !== undefined ) {
    $('#results').append('<li><a>' + data[location]["arrT"] + '</a></li>');
    console.log("The arrival time for the " + data[location]["rt"] + " line train heading "
    + data[location]["trDr"] + " is " + data[location]["arrT"] );
  } else {
    $('#result').append('<li>' + location + ' not found');
    console.log("Station has no arrivals");
  }
  e.preventDefault();
});
