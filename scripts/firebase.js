  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyArHgsol_X9ocXMKix6beXGCq4ccUzFX8g",
    authDomain: "portfolio-37089.firebaseapp.com",
    databaseURL: "https://portfolio-37089.firebaseio.com",
    storageBucket: "portfolio-37089.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var rootRef = firebase.database().ref();

  // Reference
  // var key = ref.key;
  // var rootRef = ref.root;
  // var parentRef = ref.parent;

  // Query
  // var queryRef = query.ref;

  // DataSnapshot
  // ref.on("value", function(snapshot) {
  //   var dataRef = snapshot.ref;
  //   var dataKey = snapshot.key;
  // });

//   ref.set({
//   title: "Hello World!",
//   author: "Firebase",
//   location: {
//     city: "San Francisco",
//     state: "California",
//     zip: 94103
//   }
// });
  var currentData = document.getElementById('classData');
  var titleRef = rootRef.child('title');
  var bodyRef = rootRef.child('Class1/body');
  var dataRef = firebase.database().ref('Class1');
  bodyRef.on('value', function(snapshot){
    currentData.innerText = snapshot.val();
  });


  // dataRef.on('child_added', function(data) {
  //   createPostElement(postElement, data.key, data.val().text, data.val().author);
  //   alert(data.val()); // Alerts "San Francisco"
  //   console.log(data.val());
  // });

  // firebase.database().ref("Class1/title").on('child_added', function(snapshot) {
  //   alert(snapshot.val()); // Alerts "San Francisco"
  //   console.log(snapshot.val());
  // });

  //
  // firebase.database().ref('portfolio-37089/database/data/').on('value', function(snapshot){
  //   updateData(postElement, snapshot.val());
  // });
  // function updateData(postElement, nbStart) {
  //   postElement.getElementsByClassName('classData')[0].innerText = nbStart;
  // }

  // var snapshot = firebase.database().ref.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });
  //
  // console.log(snapshot.ref);
  // firebase.database().ref('data/').on('child_added', function(snapshot){
  //
  //   document.write(snapshot.key);
  // });

  //
  // function startDatabaseQueries() {
  // // [START my_top_posts_query]
  // // var myUserId = firebase.auth().currentUser.uid;
  // // var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId).orderByChild('starCount');
  // // [END my_top_posts_query]
  // // [START recent_posts_query]
  //   var recentPostsRef = firebase.database().ref('title').limitToLast(100);
  // // [END recent_posts_query]
  //   var userPostsRef = firebase.database().ref('body');
  //
  //   var fetchPosts = function(postsRef, sectionElement) {
  //     postsRef.on('child_added', function(data) {
  //       var author = data.val().title || 'Anonymous';
  //       var containerElement = sectionElement.getElementsByClassName('classData')[0];
  //       containerElement.insertBefore(
  //         createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
  //         containerElement.firstChild);
  //     });
  //   };
  //
  //   fetchPosts(recentPostsRef);
  //   fetchPosts(userPostsRef);
  // }
  // //
  // Learning.prototype.loadLearnings = function() {
  //   // TODO(DEVELOPER): Load and listens for new messages.
  //   this.dataRef = this.database.ref('Class1');
  //   this.dataRef.off();
  //
  //   var setData = function(data) {
  //     var val = data.val();
  //     this.displayData(data.key, val.body, val.date, val.title, val.imageUrl);
  //   }.bind(this);
  //   this.dataRef.on('child_added', setData);
  //   this.dataRef.on('child_changed', setData);
  // };

  // Learning.LEARNING_TEMPLATE =
  //
  //
  // Learning.prototype.displayData = function(key, body, date, title, imageUrl) {
  //   var div = document.getElementById(classData);
  //   // If an element for that message does not exists yet we create it.
  //
  //   if (!div) {
  //     var container = document.createElement('div');
  //     container.innerHTML = Learning.LEARNING_TEMPLATE;
  //     div = container.firstChild;
  //     div.setAttribute('id', key);
  //     this.messageList.appendChild(div);
  //   }
  //   if (picUrl) {
  //     div.querySelector('.pic').style.backgroundImage = 'url(' + picUrl + ')';
  //   }
  //   div.querySelector('.name').textContent = name;
  //   var messageElement = div.querySelector('.message');
  //   if (text) { // If the message is text.
  //     messageElement.textContent = text;
  //     // Replace all line breaks by <br>.
  //     messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  //   } else if (imageUri) { // If the message is an image.
  //     var image = document.createElement('img');
  //     image.addEventListener('load', function() {
  //       this.messageList.scrollTop = this.messageList.scrollHeight;
  //     }.bind(this));
  //     this.setImageUrl(imageUri, image);
  //     messageElement.innerHTML = '';
  //     messageElement.appendChild(image);
  //   }
  //   // Show the card fading-in.
  //   setTimeout(function() {div.classList.add('visible')}, 1);
  //   this.messageList.scrollTop = this.messageList.scrollHeight;
  //   this.messageInput.focus();
  // };

  //
  // startDatabaseQueries();
