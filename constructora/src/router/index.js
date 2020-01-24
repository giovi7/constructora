import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: 'home',
    component: Home
  }, */
  {
    path: '/',
    name: 'Inicio',
    component: () => import ( '../views/Inicio.vue')
  },
  {
    path: '/Constructora',
    name: 'Constructora',
    component: () => import ( '../views/Constructora.vue')
  },
  {
    path: '/Servicio',
    name: 'Servicio',
    component: () => import ('../views/Servicio.vue')
  },
  {
    path: '/Galeria',
    name: 'Galeria',
    component: () => import ('../views/Galeria.vue')
  },
  
  {
    path: '/Cadobe',
    name: 'Cadobe',
    component: () => import ('../views/Cadobe.vue')
  },
  {
    path: '/Cbloque',
    name: 'Cbloque',
    component: () => import ('../views/Cbloque.vue')
  },
  {
    path: '/Tfachada',
    name: 'Tfachada',
    component: () => import ('../views/Tfachada.vue')
  },
  {
    path: '/Tpintura',
    name: 'Tpintura',
    component: () => import ('../views/Tpintura.vue')
  },


  {
    path: '/Contacto',
    name:'Contacto',
    component: () =>import ('../views/Contacto.vue')
  }
  //{
    //path: '/about',
    //name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
