import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

import Login from "@/components/login/Login"

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: `/home`,
      children: [
        {
          path: "home",
          name: "Index",
          component: () => import("@/components/homepage/Index.vue"),
        },
        {
          path: "zidian",
          name: "ZiDian",
          component: () => import("@/components/business/ZiDian.vue"),
        },
        {
          path: "mokuai",
          name: "MoKuai",
          component: () => import("@/components/business/MoKuai.vue"),
        },
        {
          path: "xuesheng",
          name: "XueSheng",
          component: () => import("@/components/system/XueSheng.vue"),
        },
        {
          path: "kecheng",
          name: "KeCheng",
          component: () => import("@/components/system/KeCheng.vue"),
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/components/login/Login.vue")
    },
  ]
})
