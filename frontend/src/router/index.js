import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import WhoWeAre from '../pages/WhoWeAre.vue'
import Services from '../pages/Services.vue'
import ContactUs from '../pages/ContactUs.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/who-we-are', name: 'WhoWeAre', component: WhoWeAre },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact-us', name: 'ContactUs', component: ContactUs },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
