  // Initialize Firebase
var config = {
  apiKey: 'AIzaSyArHgsol_X9ocXMKix6beXGCq4ccUzFX8g',
  authDomain: 'portfolio-37089.firebaseapp.com',
  databaseURL: 'https://portfolio-37089.firebaseio.com',
  storageBucket: 'portfolio-37089.appspot.com',
};
firebase.initializeApp(config);

var database = firebase.database();

$(function(){
  $.getJSON ('data.json', function(obj){
    $.each(obj, function(key, value){
      $('.projectExport').append(value.title);
    });
  });
});
