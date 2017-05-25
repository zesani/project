<template lang="html">
  <div class="">
    <td>{{phoneBook.name}}</td>
    <td>{{phoneBook.phone}}</td>
    <td>{{phoneBook.email}}</td>
  </div>
</template>

<script>
export default {
  props: ['phoneBook']
}
</script>

<style lang="css">
</style>
