import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Store1 from '../views/Store1.vue'
import Store2 from '../views/Store2.vue'
import Store3 from '../views/Store3.vue'
import Store4 from '../views/Store4.vue'
import Store5 from '../views/Store5.vue'
import Store6 from '../views/Store6.vue'
import ContactView from '../views/ContactView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store1',
    name: 'store1',
    component: Store1
  },
  {
    path: '/store2',
    name: 'store2',
    component: Store2
  },
  {
    path: '/store3',
    name: 'store3',
    component: Store3
  },
  {
    path: '/store4',
    name: 'store4',
    component: Store4
  },
  {
    path: '/store5',
    name: 'store5',
    component: Store5
  },
  {
    path: '/store6',
    name: 'store6',
    component: Store6
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
