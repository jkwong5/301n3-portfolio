//nav show and hide content
$('nav').on('click', 'a', function(){
  $('section').hide();
  var $nav = $(this).data('nav');
  $('#' + $nav).show();
});

$('.header').on('click', 'h2', function(){
  $('section').show();
});

//constructor functions and Prototype
// var projects = [];
// var skills = [];
// var learnings = [];

// function Project(me){
//   this.name = me.name;
//   this.time = me.time;
//   this.blurb = me.blurb;
//   this.category = me.category;
//   this.status = me.status;
//   this.pic = me.pic;
//   this.link = me.link;
// }

// function Skill (opts) {
//   this.title = opts.title;
//   this.skills = opts.skills;
// }

// function Learning (opts) {
//   this.title = opts.title;
//   this.body = opts.body;
// }

//why are the images and urls not working?
// Project.prototype.toHtml = function(){
//   var $newProj = $('article.projects').clone();
//   $newProj.find('h3').text(this.name);
//   $newProj.find('time').text(this.time);
//   $newProj.attr('data-category', this.category);
//   $newProj.find('days').html('Created ' + parseInt((new Date() - new Date(this.time)) / 60 / 60 / 24 / 1000) + ' days ago');
//   $newProj.find('span').text(this.status);
//   $newProj.find('.image-link').attr('href', this.link);
//   $newProj.find('.image-link img').attr('src', this.pic);
//   $newProj.find('section.blurb').html(this.blurb);
//   $newProj.append('<br>');
//   $newProj.removeClass('projects');
//   return $newProj;
// };

//Listing skillsData
// Skill.prototype.toHtml = function(){
//   var $newSkill = $('article.skills').clone();
//   $newSkill.find('strong').html(this.title);
//   $newSkill.find('li').html(this.skills);
//   $newSkill.append('<hr>');
//   $newSkill.removeClass('skills');
// };
//
// //Listing classData
// Learning.prototype.toHtml = function(){
//   var $newClass = $('article.learning').clone();
//   $newClass.find('h2').html(this.title);
//   $newClass.find('.learning-body').html(this.body);
//   $newClass.append('<hr>');
//   $newClass.removeClass('learning');
// };

//general handlebar
$(function(){

  Handlebars.registerHelper('daysAgo', function(){
    this.daysAgo = parseInt((new Date() - new Date(this.time)) / 60 / 60 / 24 / 1000);
    this.pubTime = this.time ? 'Created ' + this.daysAgo + ' days ago' : '(What?)';
    return this.pubTime;
  });

//TODO need more help here with Helpers
  Handlebars.registerHelper('statusIcon', function(){
    this.statusIcon = $('#status').addClass(this.status);
    this.showStatus = this.status ? this.statusIcon : 'Status';
    return this.showStatus;
  });

  var templates = $('#template').html();
  var thisTemplate = Handlebars.compile(templates);
//pass data
  var projTemplate = {
    proj : projData
  };

  var compiledProj = thisTemplate(projTemplate);
  $('#projList').append(compiledProj);

  var classTemplate = {
    class : classData
  };

  var compiledHTML = thisTemplate(classTemplate);
  $('#classData').append(compiledHTML);

  var skillTemplate = {
    skill : skillData
  };
  var compiledSkill = thisTemplate(skillTemplate);
  $('#skillList').append(compiledSkill);

});


//Populating projData
// projData.forEach(function(e) {
//   projects.push(new Project(e));
// });
//
// projects.forEach(function(a){
//   $('#projects').append(a.toHtml());
// });

//Populating skillsData
// skillsData.forEach(function(e) {
//   skills.push(new Skill(e));
// });
// skills.forEach(function(a){
//   $('#skillSets').append(a.toHtml());
// });
// learnings.forEach(function(a){
//   $('#learnings').append(a.toHtml());
// });

//viewMore button
var viewMore = {};
viewMore.teasers = function(){
  $('.blurb *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.more', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

//Status icons for each project
// $(function(){
//   $('span:contains("In Progress")').text('☛');
//   $('span:contains("On Hold")').text('✋');
//   $('span:contains("Completed")').text('&#9787;');
//   $('span:contains("Popular")').text('&#10084;');
// });

//Filter for category and status
var catView = {};

catView.populateFilter = function(){
  $('article').each(function(){
    if(!$(this).hasClass('projects')){
      val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if($('#catfilter option[value="' + val + '"]').length === 0){
        $('#catfilter').append(optionTag);
      }
    }
  });
};
//Fetch filters
catView.handleFilter = function(){
  $('#catfilter').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').show();
    }
    else {
      $('article').fadeIn();
      $('article.projects').hide();
    }
  });
};

//copyright
var d = new Date();
var y = d.getFullYear();
document.getElementById('copy').innerHTML = y;


//call functions
$(document).ready(function() {
  catView.populateFilter();
  catView.handleFilter();
  viewMore.teasers();
});
