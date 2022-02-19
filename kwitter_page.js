//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDvmU7SlC33x0A4SXl_E91Sil8WTC4FX7Q",
    authDomain: "practice-24197.firebaseapp.com",
    databaseURL: "https://practice-24197-default-rtdb.firebaseio.com",
    projectId: "practice-24197",
    storageBucket: "practice-24197.appspot.com",
    messagingSenderId: "509510638526",
    appId: "1:509510638526:web:66b4505d7a1274032ef7ef"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
    });
    document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();