console.log('hello')
var cityNames = ['NYC', 'LA', 'San Fran', 'Sydney', 'Austin' ]
var optionTags =  ""
cityNames.forEach(function(name) {
  optionTags = optionTags + "<option>" + name + "</option>"
})

$('#city-type').append(optionTags)

$('#city-type').change(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  if (userInput === 'LA') {
  $('body').addClass('la')
} else if (userInput === 'NYC') {
    $('body').addClass('nyc')
  } else if (userInput === 'San Fran') {
    $('body').addClass('sf')
  } else if (userInput === 'Sydney') {
    $('body').addClass('sydney')
  } else if (userInput === 'Austin') {
    $('body').addClass('austin')
  }
})


// Flow shoud be the following
// On click go to user input if not user input go to alternative option.
// Reminder that if the code turns the text to capitals I need to have teh following code be in capitals as well. As the toUpperCase code overrides the case of the var above it


//$('#city-type').change(function() {
//  $('body').css('background','url(images/nyc.jpg)')
//  }
//})


//$('#city-type').change(function(event) {
  //event.preventDefault()
  //var userInput = $('#city-type').val()
  //if (userInput === 'LA') {
  //$('body').css('background','url(images/la.jpg)')
  //} else if (userInput === 'NYC') {
  //  $('body').css('background', 'url(images/nyc.jpg)')
  //} else if (userInput === 'SAN FRAN') {
  //  $('body').css('background', 'url(images/sf.jpg)')
  //} else if (userInput === 'SYDNEY') {
  //  $('body').css('background', 'url(images/sydney.jpg)')
  //} else if (userInput === 'AUSTIN') {
  //  $('body').css('background', 'url(images/austin.jpg)')
  //}
//})
