import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
// import Card from '../components/Card.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    }
    // {
    //   path: '/card',
    //   name: 'Card',
    //   component: Card
    // }
  ]
})

export default router
