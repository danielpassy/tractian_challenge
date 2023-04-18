import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '../views/OverviewView.vue'
import LoginView from '../views/LoginView.vue'
import CreateUnitView from '../views/CreateUnitView.vue'
import UnitView from '../views/UnitView.vue'
import CreateAsset from '../views/CreateAssetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OverviewView
    },
    {
      path: '/create-unit',
      name: 'create-unit',
      component: CreateUnitView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/unit/:id',
      name: 'unit',
      component: UnitView
    },
    {
      path: '/create-asset',
      name: 'create-asset',
      component: CreateAsset
    }
  ]
})

export default router
