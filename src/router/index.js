import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompSignIn from '../components/CompSignIn.vue'
import Comp404NotFound from '../views/Comp404NotFound.vue'
import CompProfile from '../components/CompProfile.vue'
import CompWallet from '../layoutcomp/CompWallet.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: CompSignIn
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
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
