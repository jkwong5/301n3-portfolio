  // Initialize Firebase
var config = {
  apiKey: 'AIzaSyArHgsol_X9ocXMKix6beXGCq4ccUzFX8g',
  authDomain: 'portfolio-37089.firebaseapp.com',
  databaseURL: 'https://portfolio-37089.firebaseio.com',
  storageBucket: 'portfolio-37089.appspot.com',
};
firebase.initializeApp(config);

var database = firebase.database();

var newProject = {};

// $(function(){
//   $.ajax({
//     url:''
//   });
//   $.getJSON ('data.json', function(obj){
//     $.each(obj, function(key, value){
//       $('.projectExport').append(value.title);
//     });
//   });
// });

$('#newProject').on('submit', function(e){
  e.preventDefault();
  $('#exportField').empty();
  newProject.project = {
    title: $('#projectTitle').val(),
    category: $('#projectCategory').val(),
    url: $('#projectUrl').val(),
    body: $('#projectBody').val()
  };
  $('#exportField').append(newProject.project.title + newProject.project.category + newProject.project.url + newProject.project.body);
  var dataJSON = JSON.stringify(newProject.project);

  var ref = new Firebase('https://portfolio-37089.firebaseio.com');
  var currentRef =  Ref.child('currentMesage');
  addBtn.addEventListener('click', function(){
    currentRef.update(newProject.project);
  });
});


// //general handlebar
// $(function(){
//
//   Handlebars.registerHelper('daysAgo', function(){
//     this.daysAgo = parseInt((new Date() - new Date(this.time)) / 60 / 60 / 24 / 1000);
//     this.pubTime = this.time ? 'Created ' + this.daysAgo + ' days ago' : '(What?)';
//     return this.pubTime;
//   });
//
//   var templates = $('#template').html();
//   var thisTemplate = Handlebars.compile(templates);
// // pass data
//   var projTemplate = {
//     proj : projData
//   };
//
//   var compiledProj = thisTemplate(projTemplate);
//   $('#projList').append(compiledProj);
//
//   var learningTemplate = {
//     class : classData
//   };
//
//   var compiledHTML = thisTemplate(learningTemplate);
//   $('#learnings').append(compiledHTML);
//
//   var skillTemplate = {
//     skill : skillData
//   };
//   var compiledSkill = thisTemplate(skillTemplate);
//   $('#skillList').append(compiledSkill);
//
// });
