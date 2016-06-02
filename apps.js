//adjusting css
$('.projList li').css('list-style-type','none');

//events and effects
$('#pencil').on('click hover',function(){
  $('.projects').toggle(900);
});
$('#pen').on('click hover',function(){
  $('.content').toggle(900);
});


//using clone
$( "#hold" ).clone().prependTo( "#pineapples" );
$( "#in" ).clone().prependTo( "#eightyeight" );

var pineapples  = new Date(2222, 0, 1);
var eightyeight = new Date(2016, 4, 30);
$('#pineapples').prepend(pineapples.toDateString());
$('#eightyeight').prepend(eightyeight.toDateString());

//constructor functions TODO Prototype
function project(name, date, blurb){
  this.name = name;
  this.date = date;
  this.blurb = blurb;
  }

//copyright
var d = new Date();
var y = d.getFullYear();
document.getElementById("copy").innerHTML = y;
