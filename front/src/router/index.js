import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import LoginView from '../views/LoginView.vue'
import CreateUnitView from '../views/CreateUnitView.vue'
import UnitView from '../views/UnitView.vue'
import CreateAsset from '../views/CreateAssetView.vue'

const router = createRouter({
  publicPath: import.meta.env.DEV ?  '/' : '/tractian_challenge/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/tractian_challenge/',
      name: 'home',
      component: OverviewView
    },
    {
      path: '/tractian_challenge/create-unit',
      name: 'create-unit',
      component: CreateUnitView
    },
    {
      path: '/tractian_challenge/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/tractian_challenge/unit/:id',
      name: 'unit',
      component: UnitView
    },
    {
      path: '/tractian_challenge/create-asset',
      name: 'create-asset',
      component: CreateAsset
    }
  ]
})

export default router
