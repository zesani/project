<template>
  <div id="app">
    <input type="file" v-on:change="selectFile">
    <img id="pic" src="" alt="" />
    <img :src="urlPic" alt="" />
    <button type="button" @click="upLoad" name="button">upload</button>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCs1UPiXuuNsWkdkpL8ZSNBuvW4uVdO-Fc',
  authDomain: 'learn-storage.firebaseapp.com',
  databaseURL: 'https://learn-storage.firebaseio.com',
  storageBucket: 'learn-storage.appspot.com',
  messagingSenderId: '1010072223497'
}
firebase.initializeApp(config)
var storage = firebase.storage()
var storageRef = storage.ref('photos')
export default {
  name: 'app',
  data () {
    return {
      file: '',
      urlPic: ''
    }
  },
  methods: {
    selectFile (e) {
      var files = e.target.files
      this.file = files[0]
      var x = document.getElementById('pic')
      x.src = URL.createObjectURL(e.target.files[0])
    },
    upLoad () {
      var vm = this
      storageRef.child(this.file.name).put(this.file).then(function (snapshot) {
        console.log(snapshot.downloadURL)
        vm.urlPic = snapshot.downloadURL
        console.log('Upload success')
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
