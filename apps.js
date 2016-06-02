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

//constructor functions and Prototype
var projects = [];

function Project(me){
  this.name = me.name;
  this.time = me.time;
  this.blurb = me.blurb;
  this.category = me.category;
  this.status = me.status;
  }

Project.prototype.toHtml = function(){
  var $newProj = $('article.projects').clone();
  $newProj.find('h3').text(this.name);
  $newProj.find('time').text(this.time);
  $newProj.find('.status').text(this.status);
  $newProj.find('section.blurb').html(this.blurb);
  $newProj.append('<br>');
  $newProj.removeClass("projects");

  return $newProj;
};
projData.forEach(function(e) {
  projects.push(new Project(e));
});

projects.forEach(function(a){
  $('#section').append(a.toHtml());
});


//copyright
var d = new Date();
var y = d.getFullYear();
document.getElementById("copy").innerHTML = y;
