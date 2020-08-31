import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import TopAndBottom from '@/components/TopAndBottom'

Vue.use(VueRouter)

  const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: TopAndBottom,
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/',
    component: TopAndBottom,
    children: [
      {
        name: 'Task',
        path: 'task',
        component: () => import('@/views/Task.vue'),
        meta: { title: '任务中心' }
      }
    ]
  },
  {
    path: '/',
    component: TopAndBottom,
    children: [
      {
        name: 'Issue',
        path: 'issue',
        component: () => import('@/views/Issue.vue'),
        meta: { title: '发布任务' }
      }
    ]
  },
  {
    path: '/',
    component: TopAndBottom,
    children: [
      {
        name: 'Received',
        path: 'received',
        component: () => import('@/views/Received.vue'),
        meta: { title: '已接任务' }
      }
    ]
  },
  {
    path: '/',
    component: TopAndBottom,
    children: [
      {
        name: 'Student',
        path: 'student',
        component: () => import('@/views/Student.vue'),
        meta: { title: '学员中心' }
      }
    ]
  },
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// 路由卫士
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if ( to.name !== 'Login' && !token ) next({ name: 'Login' })
  else next()
})

export default router
