//scroll hide profile photo
$( window ).scroll(function() {
  $('.profile').hide(900);
});

//nav show and hide content
$('nav').on('click', 'a', function(){
  $('section').hide();
  var $nav = $(this).data('nav');
  $('#' + $nav).show();
});

$('.header').on('click', 'h1', function(){
  $('section').show();
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
  $newProj.attr('data-category', this.category);
  $newProj.find('days').html('Created ' + parseInt((new Date() - new Date(this.time)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProj.find('span').text(this.status);
  $newProj.find('a').attr('href', this.url);
  $newProj.find('img').attr('src', this.img);
  $newProj.find('section.blurb').html(this.blurb);
  $newProj.append('<br>');
  $newProj.removeClass('projects');
  return $newProj;
};

//filter for status
var catView = {};

catView.populateFilter = function(){
  $('article').each(function(){
    if(!$(this).attr('data-category')){
      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if($('#catfilter option[value="' + val + '"]').length === 0){
        $('#catfilter').append(optionTag);
      }
    }
  });
};

projData.forEach(function(e) {
  projects.push(new Project(e));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
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
document.getElementById('copy').innerHTML = y;

$('#sideIn').slideDown(1000, swing);

$(function(){
  catView.populateFilter();
});
