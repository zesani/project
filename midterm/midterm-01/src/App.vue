<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
          <phone-books :phone-book-lists="phoneBookLists" :remove-phone-book="removePhoneBook"></phone-books>
          <add-phone-book :add-new-phone-book="addNewPhoneBook"></add-phone-book>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import phoneBooks from './components/PhoneBooks'
import addPhoneBook from './components/AddPhoneBook'
var config = {
  apiKey: 'AIzaSyB2LTfDCGZpfs3OytlsVvSdxKCS8fL5z5Y',
  authDomain: 'midterm-5248f.firebaseapp.com',
  databaseURL: 'https://midterm-5248f.firebaseio.com',
  storageBucket: 'midterm-5248f.appspot.com',
  messagingSenderId: '704984230633'
}
firebase.initializeApp(config)
var db = firebase.database()
export default {
  name: 'app',
  data () {
    return {
      phoneBookLists: []
    }
  },
  components: {
    phoneBooks,
    addPhoneBook
  },
  mounted () {
    var vm = this
    vm.$bindAsArray('phoneBookLists', db.ref('phoneBookLists'))
  },
  methods: {
    addNewPhoneBook (name, phone, email) {
      this.$firebaseRefs.phoneBookLists.push({
        name,
        phone,
        email
      })
    },
    removePhoneBook (phoneBook) {
      this.$firebaseRefs.phoneBookLists.child(phoneBook['.key']).remove()
    },
    updatePhoneBook (phoneBook, name, phone, email) {
      this.$firebaseRefs.phoneBookLists.child(phoneBook['.key']).set({
        name,
        phone,
        email
      })
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
