import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/details/Detail'
import Register from '@/pages/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
