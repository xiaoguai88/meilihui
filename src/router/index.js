import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye.vue'
import shop from '../views/shop.vue'
import fenlei from '../views/fenlei.vue'
import mine from '../views/mine.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/shouye',
      component:shouye
    },
    {
      path:'/shop',
      component:shop
    },
    {
      path:'/fenlei',
      component:fenlei
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:"/detail/:id",
      name:"Detail",
      props: true,
      component:()=>import(/* webpackChunkName: "detail" */"../views/Detail.vue")
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
