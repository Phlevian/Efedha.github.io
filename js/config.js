const firebaseConfig = {
  apiKey: "AIzaSyAdbqwoz_hS3-_rxzvWYNxd-IHHxTksz_w",
  authDomain: "attendance-1f70f.firebaseapp.com",
  databaseURL: "https://attendance-1f70f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "attendance-1f70f",
  storageBucket: "attendance-1f70f.firebasestorage.app",
  messagingSenderId: "459969368232",
  appId: "1:459969368232:web:0c3fc14cbb6381ecc5329d",
  measurementId: "G-NC30ZJ5RMQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
console.log('connected to firebase')
function logout(){
  //body...
  firebase.auth().signOut().then(function(){
    window.location.href="index.html"
  }).catch((error)=>{
    alert("Error while you try to log out")
  })
}
