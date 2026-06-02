import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Services from '../pages/Services.vue'
import Projects from '../pages/Projects.vue'
import Careers from '../pages/Careers.vue'
import ContactUs from '../pages/ContactUs.vue'
import AdminLogin from '../pages/AdminLogin.vue'
import AdminDashboard from '../pages/AdminDashboard.vue'
import AdminProjects from '../pages/AdminProjects.vue'
import AdminProjectAdd from '../pages/AdminProjectAdd.vue'
import AdminCareer from '../pages/AdminCareer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/projects', component: Projects },
  { path: '/careers', component: Careers },
  { path: '/contact', component: ContactUs },
  { path: '/me-admin', component: AdminLogin, meta: { hideLayout: true } },
  { path: '/me-admin/dashboard', component: AdminDashboard, meta: { hideLayout: true } },
  { path: '/me-admin/projects', component: AdminProjects, meta: { hideLayout: true } },
  { path: '/me-admin/projects/add', component: AdminProjectAdd, meta: { hideLayout: true } },
  { path: '/me-admin/career', component: AdminCareer, meta: { hideLayout: true } },
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
