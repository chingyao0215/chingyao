import { createRouter, createWebHistory } from 'vue-router'
import ComponentsView from '../views/ComponentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/components'
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router 