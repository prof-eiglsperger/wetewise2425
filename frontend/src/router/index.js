import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "../stores/user";
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import RestrictedView from '../views/RestrictedView.vue'
import NewCategoryView from "../views/NewCategoryView.vue";
import AboutView from "../views/AboutView.vue";
import CategoryView from "../views/CategoryView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import LocationView from "../views/LocationView.vue";
import LocationsView from "../views/LocationsView.vue";
import NewLocationView from "../views/NewLocationView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: "/new",
      component: NewCategoryView,
    },
    {
      path: "/newLocation",
      component: NewLocationView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/categories/:id",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/location",
      name: "locations",
      component: LocationsView,
    },
    {
      path: "/location/:id",
      name: "location",
      component: LocationView,
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
