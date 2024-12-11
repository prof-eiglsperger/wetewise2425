import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "../stores/user";
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import RestrictedView from '../views/RestrictedView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/restricted',
      name: 'restricted',
      component: RestrictedView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.name !== 'login' && to.name !== 'signup' && to.name !== 'home' && 
    to.name !== 'about' && userStore.user == null) next({ name: 'login' })
  else next()
})

export default router
