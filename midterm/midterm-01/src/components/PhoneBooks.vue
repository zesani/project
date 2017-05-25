<template lang="html">
  <div class="">
    <h1>PhoneBooks</h1>
    <!-- <hr> -->
    <table class="table table-striped">
      <tbody>
        <tr>
          <th>#</th>
          <th>ชื่อ</th>
          <th>เบอร์โทร</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(phoneBook, index) in phoneBookLists">
          <td>#{{index+1}}</td>
          <td>{{phoneBook.name}}</td>
          <td>{{phoneBook.phone}}</td>
          <td>{{phoneBook.email}}</td>
          <td><button class="btn btn-danger" type="button" name="button" @click="removePhoneBook(phoneBook)">DELETE</button></td>
        </tr>
        <!-- <tr>
          <phone-book v-for="phoneBook in phoneBookLists" :phone-book="phoneBook"></phone-book>
        </tr> -->
      </tbody>

    </table>

  </div>
</template>

<script>
import phoneBook from './PhoneBook'
export default {
  props: ['phoneBookLists', 'removePhoneBook'],
  components: {
    phoneBook
  }
}
</script>

<style lang="css">
</style>
