import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Projects from './views/projects'
import Truenas from './views/truenas'
import Resume from './views/resume'
import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Projects',
      path: '/projects',
      component: Projects,
    },
    {
      name: 'truenas',
      path: '/truenas',
      component: Truenas,
    },
    {
      name: 'Resume',
      path: '/resume',
      component: Resume,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
