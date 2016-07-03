(function(module){
//nav show and hide content
  // $('nav').on('click', 'a', function(){
  //   $('section').hide();
  //   var $nav = $(this).data('nav');
  //   $('#' + $nav).show();
  // });

  $('.header').on('click', 'h2', function(){
    $('section').show();
  });

  // $(window).on('load', function(){
  //   $('section').hide();
  //   $('#projects').show();
  //   $('#aboutMe').show();
  // });

  //viewMore button
  var viewMore = {};
  viewMore.teasers = function(){
    $('.blurb *:nth-of-type(n+1)').hide();
    $('#project-template').on('click', 'a.more', function(e) {
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


  var templateView = {};
  var projectView = {};
  var skillView = {};
  var resumeView = {};

  templateView.initIndexPage = function(){
    $('#classData').empty();
    Learning.all.forEach(function(a){
      $('#classData').append(a.toHtml());
    });
  };

  projectView.initIndexPage = function(){
    Project.all.forEach(function(a){
      $('#projectData').append(a.toHtml());
    });
  };

  skillView.initIndexPage = function(){
    Skill.all.forEach(function(b){
      $('#skillData').append(b.toHtml());
    });
  };

  resumeView.initIndexPage = function(){
    var templateSource = $('#resume-template').html();
    var template = Handlebars.compile(templateSource);
    Resume.numYearsByCat().forEach(function(stat){
      $('.resume-stats').append(template(stat));
    });
    $('#resume .years').text(Resume.numYearsAll);
    $('#resume .cat').text(Resume.all.length);
  };

  //call functions
  $(document).ready(function() {
    catView.populateFilter();
    catView.handleFilter();
    viewMore.teasers();
    // templateView.create();
  });

  module.catView = catView;
  module.viewMore = viewMore;
  module.resumeView = resumeView;
  module.skillView = skillView;
  module.projectView = projectView;
  module.templateView = templateView;
})(window);
