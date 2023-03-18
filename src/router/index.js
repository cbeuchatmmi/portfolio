import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import UC from '../components/UC.vue'
import TT from '../components/TT.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: AboutView },
    { path: '/uc', name: 'UC', component: UC },
    { path: '/tt', name: 'TT', component: TT },
  ]
})

export default router
