import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import asyncImport from '@/utils/async-component-factory'

const About = () => asyncImport(import('@/views/About.vue'))

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/anchor',
    name: 'Anchor',
    component: () => import('@/views/Anchor')
  },
  {
    path: '/scss',
    name: 'Scss-Study',
    component: () => import('@/views/Scss')
  },
  {
    path: '/pipeline',
    name: 'Pipeline',
    component: () => import('@/views/Pipleline')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import('@/views/Transition')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import('@/views/Animation')
  },
  {
    path: '/multi-levels',
    name: 'MultiLevels',
    component: () => import('@/views/MultiLevels')
  },
  {
    path: '/drag-drop',
    name: 'DragDrop',
    component: () => import('@/views/DragDrop')
  },
]

const router = new VueRouter({
  routes
})

export default router
