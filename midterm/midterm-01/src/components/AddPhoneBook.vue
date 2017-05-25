<template lang="html">
  <div class="">
    <form class="form-inline" action="index.html" method="post">
      <input type="text" name="" value="" placeholder="ชื่อ" class="form-control" v-model="name">
      <input type="text" name="" value="" placeholder="เบอร์โทร" class="form-control"  v-model="phone">
      <input type="email" placeholder="Email" class="form-control" v-model="email">
      <button type="button" name="button" @click="add" class="btn btn-default">+Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['addNewPhoneBook'],
  data () {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    add () {
      this.addNewPhoneBook(this.name, this.phone, this.email)
      this.name = ''
      this.phone = ''
      this.email = ''
    }
  }
}
</script>

<style lang="css">
</style>
