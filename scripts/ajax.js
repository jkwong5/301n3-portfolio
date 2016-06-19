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

Project.all = [];
Skill.all = [];
Learning.all = [];

Project.prototype.toHtml = function(){
  var temp = Handlebars.compile($('#project-template').text());
  return temp(this);
};

Project.loadAll = function(data) {
  console.log(data);
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

$(function(){
  Learning.fetchAll();
  Project.fetchAll();
  Skill.fetchAll();
});
