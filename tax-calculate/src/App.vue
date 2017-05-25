<template>
  <div class="app">
    <div class="box">
      <div class="status-bar">

      </div>
      <div class="process">
        {{process}}{{preTax}}
      </div>
      <div class="result">
        <div class="tax">
          7%
        </div>
        <div class="calTax">
          {{tax}}
        </div>
      </div>
      <div class="input-box">
        <div class="input-button" @click="clear"> AC</div>
        <div class="input-button" @click="switchPositive">+-</div>
        <div class="input-button" @click="inputButton('%')">%</div>
        <div class="input-button" @click="inputButton('/')">/</div>
        <div class="input-button" @click="inputButton(7)">7</div>
        <div class="input-button" @click="inputButton(8)">8
        </div>
        <div class="input-button" @click="inputButton(9)">9
        </div>
        <div class="input-button" @click="inputButton('x')">x
        </div>
        <div class="input-button" @click="inputButton(4)">4
        </div>
        <div class="input-button" @click="inputButton(5)">5
        </div>
        <div class="input-button" @click="inputButton(6)">6
        </div>
        <div class="input-button" @click="inputButton('-')">-
        </div>
        <div class="input-button" @click="inputButton(1)">1
        </div>
        <div class="input-button" @click="inputButton(2)">2
        </div>
        <div class="input-button" @click="inputButton(3)">3
        </div>
        <div class="input-button" @click="inputButton('+')">+
        </div>
        <div class="input-button" @click="inputButton(0)">0
        </div>
        <div class="input-button">
        </div>
        <div class="input-button" @click="inputButton('.')">.
        </div>
        <div class="input-button" @click="inputButton('=')">=
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      process: '',
      processCal: [],
      preTax: '',
      operator: ['+', '-', 'x', '/'],
      value: ''
    }
  },
  methods: {
    inputButton (key) {
      if (key === '=') {
        this.processCal.push(this.value)
        this.preTax = this.calculate()
        this.process = this.process + ' ' + key
      }
      if (this.processCal.length < 3) {
        if (this.operator.find(i => i === key)) {
          this.processCal.push(this.value)
          this.processCal.push(key)
          this.value = ''
          this.process = this.process + ' ' + key + ' '
        } else {
          this.value = this.value + key
          this.process = this.process + key
        }
      }
    },
    calculate () {
      if (this.processCal[1] === '+') {
        return parseFloat(this.processCal[0]) + parseFloat(this.processCal[2])
      }
      if (this.processCal[1] === '-') {
        return parseFloat(this.processCal[0]) + parseFloat(this.processCal[2])
      }
      if (this.processCal[1] === 'x') {
        return parseFloat(this.processCal[0]) + parseFloat(this.processCal[2])
      }
      if (this.processCal[1] === '/') {
        return parseFloat(this.processCal[0]) + parseFloat(this.processCal[2])
      }
    },
    clear () {
      this.processCal = []
      this.preTax = ''
      this.process = ''
      this.value = ''
    },
    switchPositive () {
      if (this.process) {
        this.process = '-' + this.process
      }
    }
  },
  computed: {
    tax () {
      return (this.preTax * 7 / 100) + (this.preTax)
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f73855;
}
.app {
  height: 100%;
  width: 100%;
}
.box {
  margin-left: 40vw;
  margin-top: 10vh;
  width: 20.85vw;
  height: 72vh;
  // border: 1px black solid;
}
.status-bar {
  background-color: #c83b34;
  height: 3vh;
}
.process {
  background-color: #fa4544;
  height: 15vh;
  text-align: right;
  line-height: 15vh;
}
.result {
  background-color: white;
  height: 10vh;
  text-align: right;
  line-height: 10vh;
}
.tax {
  width: 5vw;
  display: inline-block;
  border-right: 1px solid black;
  text-align: center;
  vertical-align: middle;

}
.calTax {
  display: inline-block;
  width: 15vw;
  text-align: center;
  vertical-align: middle;
}
.input-box {
  background-color: #656565;
  color: white;
  height:42vh;
  .input-button {
    cursor: pointer;
    float: left;
    margin-left: 0.001em;
    border: 0.15vw solid #301c39;
    text-align: center;
    vertical-align: middle;
    line-height: 8.5vh;
    width: 5vw;
    height: 8.4vh;
    background-color: #2f1c39;
  }
}
</style>
