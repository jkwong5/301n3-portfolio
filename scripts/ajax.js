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

function Learning (opts) {
  this.title = opts.title;
  this.body = opts.body;
}
//
// Project.all = [];
// Skill.all = [];
Learning.all = [];

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
    Learning.loadAll(rawData);
    templateView.initIndexPage()
  } else {
    $.getJSON('data/data.json', function(data) {
      Learning.loadAll(data);
      var learningString = JSON.stringify(data);
      localStorage.setItem('learnings', learningString);
      templateView.initIndexPage();
    });
  }
};

$(function(){
  Learning.fetchAll();
});
