//adjusting css
$('.projList li').css('list-style-type','none');

//events and effects
$('#pencil').on('click hover',function(){
  $('#section').toggle(900);
});
$('#pen').on('click hover',function(){
  $('#sectionTwo').toggle(900);
});

//constructor functions and Prototype
var projects = [];

function Project(me){
  this.name = me.name;
  this.time = me.time;
  this.blurb = me.blurb;
  this.category = me.category;
  this.status = me.status;
  }

//why are the images and urls not working?
Project.prototype.toHtml = function(){
  var $newProj = $('article.projects').clone();
  $newProj.find('h3').text(this.name);
  $newProj.find('time').text(this.time);
  $newProj.find('days').html('Created ' + parseInt((new Date() - new Date(this.time))/60/60/24/1000) + ' days ago');
  $newProj.find('span').text(this.status);
  $newProj.find('a').attr('href', this.url);
  $newProj.find('img').attr('src', this.img);
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

$(function(){
  $('span:contains("In Progress")').text('☛');
  $('span:contains("On Hold")').text('✋');
  $('span:contains("Completed")').text('&#9787;');
  $('span:contains("Popular")').text('&#10084;');
});


//Listing skillsData

//copyright
var d = new Date();
var y = d.getFullYear();
document.getElementById("copy").innerHTML = y;

$('#sideIn').slideDown(1000, swing);
