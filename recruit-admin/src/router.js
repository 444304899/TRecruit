import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Center from './views/Center.vue'
import JobHome from './views/JobHome.vue'
import AddJob from './views/AddJob.vue'
import JobList from './views/JobList.vue'
import EditJob from './views/EditJob.vue'
import Aside from './components/Aside.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/jobhome',
      name: 'jobhome',
      component: JobHome,
      children: [
        {
          path: 'addjob',
          component: AddJob
        },
        {
          path: 'joblist',
          component: JobList
        },
        {
          path: 'editjob',
          component: EditJob
        }
      ],
    },
    {
      path:'/aside',
      name:'aside',
      component:Aside,
      children:[
        {
          path: 'addjob',
          component: AddJob
        },
        {
          path: 'editjob',
          component: EditJob
        },
      ],
    },
  ]
})
