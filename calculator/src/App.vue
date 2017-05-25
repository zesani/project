<template>
  <div id="app">
    {{display}}
    <br>
    <button type="button" name="button">C</button>
    <button type="button" name="button">/</button>
    <button type="button" name="button" @click="enterOps(3)">X</button>
    <button type="button" name="button">DEL</button><br>
    <button type="button" name="button" @click="enterNum(7)">7</button>
    <button type="button" name="button" @click="sum">=</button>
    <emit v-on:test="test"></emit>
  </div>
</template>

<script>
import emit from './components/emit'
export default {
  name: 'app',
  data () {
    return {
      currentNum: 0,
      decimalAdded: false,
      total: 0,
      prevOps: 0,
      display: ''
    }
  },
  components: {
    emit
  },
  methods: {
    test () {
      console.log('emit')
    },
    enterNum (val) {
      if (this.currentNum === 0) {
        if (this.prevOps === 0) {
          this.total = 0
        }
        if (this.decimalAdded === true) {
          this.currentNum = val / 10
          this.display += val.toString()
        } else {
          this.currentNum = val
          this.display = val.toString()
        }
      } else {
        if (this.decimalAdded === true) {
          if (this.currentNum.toString().indexOf('.') === -1) {
            this.currentNum = parseFloat(this.currentNum.toString() + '.' + val.toString())
          } else {
            this.currentNum += val.toString()
            this.currentNum = parseFloat(this.currentNum)
          }
        } else {
          this.currentNum *= 10
          this.currentNum += val
        }
        this.display += val.toString()
      }
    },
    enterOps (ops) {
      if (this.total === 0 && this.currentNum === 0) {
        return
      }
      if (this.total === 0) {
        this.total += this.currentNum
      }
      switch (this.prevOps) {
        case 1:
          this.total += this.currentNum
          break
        case 2:
          this.total -= this.currentNum
          break
        case 3:
          this.total *= this.currentNum
          break
        case 4:
          this.total /= this.currentNum
          break
        case 0:
          break
      }

      if (this.decimalAdded === true) {
        this.decimalAdded = false
      }
      this.currentNum = 0
      this.prevOps = ops
    },
    sum () {
      switch (this.prevOps) {
        case 1:
          this.total += this.currentNum
          break
        case 2:
          this.total -= this.currentNum
          break
        case 3:
          this.total *= this.currentNum
          break
        case 4:
          this.total /= this.currentNum
          break
        case 0:
          break
      }
      this.display = this.total.toString()
      this.prevOps = 0
      this.currentNum = 0
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
