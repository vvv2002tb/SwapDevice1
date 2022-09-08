import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompLogin from '../components/CompLogin.vue'
import Comp404NotFound from '../views/Comp404NotFound.vue'
import CompProfile from '../components/CompProfile.vue'
import CompWallet from '../layoutcomp/CompWallet.vue'
import CompHome from '../components/CompHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CompHome
  },
  
  {
    path: '/signup',  
    name: 'signup',
    component: HomeView
  },
  
  {
    path: '/register',
    redirect: '/signup'
  },
  // 404 page 
  {
    path: '/:pathMatch(.*)*',
    component: Comp404NotFound,
  },
  {
    path: '/profile',  
    name: 'profile',
    component: CompProfile
  },
  {
    path: '/profile/wallet',
    name: 'wallet',
    component: CompWallet
  },
  {
    path: '/login',
    name: 'login',
    component: CompLogin

  }
  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
