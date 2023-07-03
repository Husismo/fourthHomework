import Vue from 'vue'
import VueRouter from 'vue-router'
import userPage from '../views/userPage.vue'
import createTaskPage from '../views/createTaskPage.vue'
import projectsPage from '../views/projectsPage.vue'
import tasksPage from '../views/tasksPage.vue'
import usersPage from '../views/usersPage.vue'
import taskPage from '../views/taskPage.vue'
import notFound from '../views/notFound.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/createtask',
    name: 'createtask',
    component: createTaskPage
  },
  {
    path: '/users',
    name: 'userspage',
    component: usersPage,
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: userPage
  },
  {
    path: '/projects',
    name: 'projectspage',
    component: projectsPage
  },
  {
    path: '/tasks',
    name: 'taskspage',
    component: tasksPage
  },
  {
    path: '/task/:id',
    name: 'task',
    component: taskPage,
    props: true,
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]

const router = new VueRouter({
  routes,
  mode: `history`
})

export default router
