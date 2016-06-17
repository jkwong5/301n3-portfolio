//nav show and hide content
$('nav').on('click', 'a', function(){
  $('section').hide();
  var $nav = $(this).data('nav');
  $('#' + $nav).show();
});

$('.header').on('click', 'h2', function(){
  $('section').show();
});

// // constructor functions and Prototype
// var projects = [];
// var skills = [];
// var learnings = [];
//
// function Project(me){
//   this.name = me.name;
//   this.time = me.time;
//   this.blurb = me.blurb;
//   this.category = me.category;
//   this.status = me.status;
//   this.pic = me.pic;
//   this.link = me.link;
// }
//
// function Skill (opts) {
//   this.title = opts.title;
//   this.skills = opts.skills;
// }
//
// function Learning (opts) {
//   this.title = opts.title;
//   this.body = opts.body;
// }

//create template
var templateView = {};

// templateView.create = function(){
//   var learning;
//   $('#learnings').empty();
//
//   // learning = new Learning({
//   //   title: $('#learning-title').val(),
//   //   body: $('#learning-body').val()
//   // });
//
//   $('#learnings').append(learning.toHtml());
//
// };

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
$(function(){
  $('span:contains("In Progress")').addClass('icon-play2').text('');
  $('span:contains("On Hold")').addClass('icon-pause').text('');
  $('span:contains("Completed")').addClass('icon-notification').text('');
  $('span:contains("Cancelled")').addClass('icon-cancel-circle').text('');
});

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

templateView.initIndexPage = function(){
  Learning.all.forEach(function(a){
    $('#classData').append(a.toHtml());
  });
};

//call functions
$(document).ready(function() {
  catView.populateFilter();
  catView.handleFilter();
  viewMore.teasers();
  // templateView.create();
});
