import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Init',
      component: Init
    }
  ]
})
