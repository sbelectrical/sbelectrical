import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import Careers from '../pages/Careers.vue'
import ContactUs from '../pages/ContactUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
  { path: '/careers', component: Careers },
  { path: '/contact', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 88,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
