(function(module) {
  var indexController = {};

  indexController.index = function() {
    $('.tab-content').hide();
    $('#aboutMe').fadeIn();
    $('#projects').fadeIn();
  };

  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#aboutMe').fadeIn();
  };

  var projectController = {};
  // Project.fetchAll(projectView.initIndexPage);

  projectController.index = function(ctx, next) {
    projectView.initIndexPage(ctx.projects);
  };

  projectController.loadAll = function(ctx, next) {
    var projectData = function() {
      ctx.projects = Project.all;
      next();
    };
    if (Project.all.length) {
      ctx.projects = Project.all;
      next();
    } else {
      Project.fetchAll(projectData);
    }
  };


  // projectController.index = function() {
  //   // if (Project.fetchAll.length){
  //   //   $('.tab-content').hide();
  //   //   $('#projects').fadeIn();
  //   // } else {
  //   $('.tab-content').hide();
  //   $('#projects').fadeIn();
  //
  // };

  var skillController = {};
  Skill.fetchAll(skillView.initIndexPage);

  skillController.index = function() {
    $('.tab-content').hide();
    $('#skillSets').fadeIn();
  };

  var learningController = {};
  Learning.fetchAll(templateView.initIndexPage);

  learningController.index = function() {
    $('.tab-content').hide();
    $('#learnings').fadeIn();
  };

  var repoController = {};

  repoController.index = function() {
    repos.requestRepos(repoView.index);
  };

  // repoController.index = function() {
  //   $('.tab-content').hide();
  //   $('#repos').fadeIn();
  //   repos.requestRepos(repoView.index);
  // };

  var resumeController = {};
  Resume.fetchAll(resumeView.initIndexPage);

  resumeController.index = function() {
    $('.tab-content').hide();
    $('#resume').fadeIn();
  };

  module.indexController = indexController;
  module.aboutController = aboutController;
  module.projectController = projectController;
  module.repoController = repoController;
  module.skillController = skillController;
  module.learningController = learningController;
  module.resumeController = resumeController;
})(window);
