(function(module) {
  function Project(opts){
    this.name = opts.name;
    this.time = opts.time;
    this.blurb = opts.blurb;
    this.category = opts.category;
    this.status = opts.status;
    this.pic = opts.pic;
    this.link = opts.link;
  }

  function Skill (opts) {
    this.title = opts.title;
    this.skills = opts.skills;
  }

  function Learning (opts) {
    this.title = opts.title;
    this.body = opts.body;
  }

  function Resume (opts) {
    this.company = opts.company;
    this.title = opts.title;
    this.start = opts.start;
    this.end = opts.end;
    this.category = opts.category;
    this.summary = opts.summary;
  }

  Project.all = [];
  Skill.all = [];
  Learning.all = [];
  Resume.all = [];
  var repos = {};
  repos.all = [];

  Resume.loadAll = function(resData){
    // resData.sort(function(a, b){
    //   return (new Date(b.end)) - (new Date(a.end));
    // });
    Resume.all = resData.map(function(ele){
      return new Resume(ele);
    });
  };

  Resume.fetchAll = function(callback){
    if (localStorage.resData) {
      Resume.loadAll(JSON.parse(localStorage.resData));
      callback();
    } else {
      $.getJSON('/data/resumedata.json', function(resData){
        Resume.loadAll(resData);
        localStorage.resData = JSON.stringify(resData);
        callback();
      });
    }
  };
//calculate years
  Resume.numYearsAll = function(){
    return Resume.all.map(function(resume) {
      return (resume.end - resume.start);
    })
    .reduce(function(a, b){
      return a + b;
    });
  };

  // Resume.totalNumYears = function(){
  //   return Resume.numYearsAll.reduce(function(a, b){
  //     return a + b;
  //   }, 0);
  // };
    // .reduce(function(a, b){
    //   if(b.end > 2000){
    //     a.push({
    //       years: (b.end - b.start) + 1
    //     });
    //   }
    //   return a + b;
    // }, []);

  //unique category
  Resume.allCat = function(){
    return Resume.all.map(function(resume){
      return resume.category;
    })
    .reduce(function(a, b){
      if (a.indexOf(b) < 0){
        a.push(b);
      }
      return a;
    }, []);
  };

  Resume.numYearsByCat = function(){
    return Resume.allCat().map(function(category){
      return {
        catName: category,
        catYears: Resume.all.reduce(function(a, b){
          if (b.category === category){
            a.push(b.end - b.start);
          }
          return a;
        }, []).reduce(function(a, b){
          return a + b;
        })
      };
    });
  };

  Project.prototype.toHtml = function(){
    var temp = Handlebars.compile($('#project-template').text());
    return temp(this);
  };

  Project.loadAll = function(data) {
    data.forEach(function(e){
      Project.all.push(new Project(e));
    });
  };

  Project.fetchAll = function(){
    if (localStorage.data){
      Project.loadAll(JSON.parse(localStorage.data));
      projectView.initIndexPage();
    } else {
      $.getJSON('data/projectdata.json', function(data) {
        Project.loadAll(data);
        localStorage.setItem('data', JSON.stringify(data));
        projectView.initIndexPage();
      });
    }
  };

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos' + '?per_page=10' + '&sorted=updated',
      type: 'GET',
      // headers: {'authorization': 'token ' + GITHUB_TOKEN},
      success: function(data){
        repos.all = data;
      }
    }).done(callback);
  };

  repos.with = function() {
    return repos.all.filter(function(repo) {
      return repo.fork === false;
    });
  };

  Skill.prototype.toHtml = function(){
    var template = Handlebars.compile($('#skill-template').text());
    return template(this);
  };

  Skill.loadAll = function(meta) {
    meta.forEach(function(e){
      Skill.all.push(new Skill(e));
    });
  };

  Skill.fetchAll = function(){
    if (localStorage.meta){
      Skill.loadAll(JSON.parse(localStorage.meta));
      skillView.initIndexPage();
    } else {
      $.getJSON('data/skilldata.json', function(meta) {
        Skill.loadAll(meta);
        localStorage.setItem('meta', JSON.stringify(meta));
        skillView.initIndexPage();
      });
    }
  };

  Learning.prototype.toHtml = function(){
    var template = Handlebars.compile($('#learning-template').text());
    return template(this);
  };

  Learning.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Learning.all.push(new Learning(ele));
    });
  };

  Learning.fetchAll = function(){
    if (localStorage.rawData){
      Learning.loadAll(JSON.parse(localStorage.rawData));
      templateView.initIndexPage();
    } else {
      $.getJSON('data/learningdata.json', function(rawData) {
        Learning.loadAll(rawData);
        var learningString = JSON.stringify(rawData);
        localStorage.setItem('rawData', learningString);
        templateView.initIndexPage();
      });
    }
  };

  // $(function(){
  //   Learning.fetchAll(templateView.initIndexPage);
  //   Project.fetchAll(projectView.initIndexPage);
  //   Skill.fetchAll(skillView.initIndexPage);
  //   Resume.fetchAll(resumeView.initIndexPage);
  // });

  module.Project = Project;
  module.Skill = Skill;
  module.Learning = Learning;
  module.Resume = Resume;
  module.repos = repos;
})(window);
