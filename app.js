


$(document).ready(function() {
  $('button').on('click', buttonClick);
});

var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var blueCounter = 0;
var red = 0;


function buttonClick() {
  var color = $(this).data('color');
  console.log(color);
  $('.container').append('<div class="color-cube ' + color + '"></div>');



  switch(color) {
    case "red":
    redCounter++
    $('#' + color).text("Total " + color + ": " + redCounter);
    break;
    case "yellow":
    yellowCounter++
    $('#' + color).text("Total " + color + ": " + yellowCounter);
    break;
    case "green":
    greenCounter++
    $('#' + color).text("Total " + color + ": " + greenCounter);
    break;
    case "blue":
    blueCounter++;
    $('#' + color).text("Total " + color + ": " + blueCounter);
    break;
  }

}
