import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/EventsView.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import(/* webpackChunkName: "teams" */ '../views/TeamsView.vue')
  },
  {
    path: '/facilities',
    name: 'facilities',
    component: () => import(/* webpackChunkName: "facilities" */ '../views/FacilitiesView.vue')
  },
  {
    path: '/rosters',
    name: 'rosters',
    component: () => import(/* webpackChunkName: "rosters" */ '../views/RostersView.vue')
  },
  {
    path: '/ourstory',
    name: 'ourstory',
    component: () => import(/* webpackChunkName: "ourstory" */ '../views/OurStoryView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
