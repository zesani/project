<template>
  <div id="app">
    <h1>Welcome to My Awesome App</h1>
<div id="firebaseui-auth-container"></div>
<div id="sign-in-status"></div>
<div id="sign-in"></div>
<div id="account-details"></div>
  <div class="" v-if="uid == '0CS1yXFCroSqZtjbvxXr8mDmKw93'">
    <h1>Secect</h1>

  </div>
  <button type="button" @click="signOut" name="button">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
var config = {
  apiKey: 'AIzaSyBasyXEYg3xGN6Y9ndOtt9chPV4m60_6Xw',
  authDomain: 'it-3k-1f766.firebaseapp.com',
  databaseURL: 'https://it-3k-1f766.firebaseio.com',
  storageBucket: 'it-3k-1f766.appspot.com',
  messagingSenderId: '914467199924'
}
firebase.initializeApp(config)
var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')
var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'it-3k-1f766.appspot.com'
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth())
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig)
// window.addEventListener('load', function () {
//   initApp()
// })
export default {
  name: 'app',
  data () {
    return {
      uid: ''
    }
  },
  mounted () {
    this.initApp()
  },
  methods: {
    initApp () {
      var vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
          var displayName = user.displayName
          var email = user.email
          var emailVerified = user.emailVerified
          var photoURL = user.photoURL
          var uid = user.uid
          var providerData = user.providerData
          vm.uid = uid
          user.getToken().then(function (accessToken) {
            document.getElementById('sign-in-status').textContent = 'Signed in'
            document.getElementById('sign-in').textContent = 'Sign out'
            document.getElementById('account-details').textContent = JSON.stringify({
              displayName: displayName,
              email: email,
              emailVerified: emailVerified,
              photoURL: photoURL,
              uid: uid,
              accessToken: accessToken,
              providerData: providerData
            }, null, '  ')
          })
        } else {
            // User is signed out.
          document.getElementById('sign-in-status').textContent = 'Signed out'
          document.getElementById('sign-in').textContent = 'Sign in'
          document.getElementById('account-details').textContent = 'null'
        }
      }, function (error) {
        console.log(error)
      })
    },
    signOut () {
      firebase.auth().signOut()
      this.uid = ''
      console.log(firebase.auth().getAuthInstance())
      // var auth2 = gapi.auth2.getAuthInstance()
      // auth2.signOut().then(function () {
      //   console.log('User signed out.')
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
