import Vue from 'vue'
import VueRouter from 'vue-router'
import NavButton from '../views/NavButton.vue'
import NavPages from '../views/NavPages.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NavButton',
    component: NavButton
  },
  {
    path: '/navButton',
    name: 'NavButton',
    component: NavButton
  },
  {
    path: '/navPages',
    name: 'NavPages',
    component: NavPages
  }
]

const router = new VueRouter({
  routes
})

export default router
