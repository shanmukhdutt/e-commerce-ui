import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Login from '../views/Login.vue';
import ProductDetails from '../views/ProductDetails.vue';
const routes: Array<RouteRecordRaw> = [ 
  { 
    name:'Login',
    path:'/login',
    component:Login
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path: '/',
    redirect: '/tabs/Home'
  },
  {
    name:'ProductDetails',
    path:'/product-details/:id',
    component:ProductDetails
  },
  {
    path: '/tabs',
    component: Tabs,
    children:[
      
      {
        path:'',
        redirect:'/tabs/Home'
      },
      {
        path:'Home',
        component:()=>import('@/views/Home.vue')
      },
      {
        path:'SearchCustomer',
        component:()=>import('@/views/SearchCustomer.vue')
      },
      {
        path:'OrderFulfillment',
        component:()=>import('@/views/OrderFulfillment.vue')
      },
      {
        path:'ShoppingCart',
        component:()=>import('@/views/ShoppingCart.vue')
      },
      {
        path:'Setting',
        component:()=>import('@/views/Setting.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
