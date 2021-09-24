import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/organisms/LoginView.vue'
import Top from '../components/organisms/TopView.vue'
import { authorizeToken } from './guards'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
    meta: {
      requiresAuth: true 
    }
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(authorizeToken)

export default router
