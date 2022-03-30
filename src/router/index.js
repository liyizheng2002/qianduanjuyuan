import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SwitchTab',
    component: () => import('@/views/SwitchTab'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('@/views/history')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine')
      }
    ]
  },
  {
    path: '/question/:id',
    component: () => import('@/views/question')
  },
  {
    path: '/create/question',
    component: () => import('@/views/CreateQuestion')
  },
  {
    path: '/WriteAnswers/:id',
    component: () => import('@/views/WriteAnswers')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
