import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import { Layout } from '../layout'


Vue.use(Router)

// 默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    // redirect: '/index',
    meta: { keepAlive: false, title: 'element' },
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('@/pages/index/index'),
        meta: {title: '首页'}
      },
      {
        path: '/userList',
        name: '用户列表',
        component: () => import('@/pages/userList/userList')
      }
    ]
  }
]

// 注册路由
export default new Router({
  mode: 'history',
  base: "/permission/", // 添加根目录
  routes: constantRouterMap
})
