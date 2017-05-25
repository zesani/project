<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyB2LTfDCGZpfs3OytlsVvSdxKCS8fL5z5Y',
  authDomain: 'midterm-5248f.firebaseapp.com',
  databaseURL: 'https://midterm-5248f.firebaseio.com',
  storageBucket: 'midterm-5248f.appspot.com',
  messagingSenderId: '704984230633'
}
firebase.initializeApp(config)
var db = firebase.database()
var provider = new firebase.auth.FacebookAuthProvider()
export default {
  name: 'app',
  data () {
    return {
      user: '',
      lists: []
    }
  },
  mounted () {
    var vm = this
    vm.$bindAsArray('lists', db.ref('lists'))
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.user = user
      } else {
      }
    })
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {
        // เข้าแค่ครังแรกที่กด Login จะได้ token มาใช้
        var token = result.credential.accessToken
        console.log(token)
      }
    })
  },
  methods: {
    loginWithFacebook () {
      firebase.auth().signInWithRedirect(provider)
    },
    logoutWithFacebook () {
      var vm = this
      firebase.auth().signOut().then(function () {
        vm.user = ''
      }, function (error) {
        console.log(error)
      })
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
