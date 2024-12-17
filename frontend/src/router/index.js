import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "../stores/user";
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import NewCategoryView from "../views/NewCategoryView.vue";
import AboutView from "../views/AboutView.vue";
import CategoryView from "../views/CategoryView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import LocationView from "../views/LocationView.vue";
import LocationsView from "../views/LocationsView.vue";
import NewLocationView from "../views/NewLocationView.vue";
import ReservationView from "../views/ReservationView.vue";
import AddressView from "../views/AddressView.vue";
import SummaryView from "../views/SummaryView.vue";
import ConfirmationView from "../views/ConfirmationView.vue";



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
      meta: {requiresAdmin: true}
    },
    {
      path: "/new",
      component: NewCategoryView,
      meta: {requiresAdmin: true}
    },
    {
      path: "/newLocation",
      component: NewLocationView,
      meta: {requiresAdmin: true}
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
      meta: {requiresAdmin: true}
    },
    {
      path: "/categories/:id",
      name: "category",
      component: CategoryView,
      meta: {requiresAdmin: true}
    },
    {
      path: "/location",
      name: "locations",
      component: LocationsView,
      meta: {requiresAdmin: true}
    },
    {
      path: "/location/:id",
      name: "location",
      component: LocationView,
      meta: {requiresAdmin: true}
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
      component: ReservationView,
      meta: {requiresAuth: true}
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView,
      meta: {requiresAuth: true}
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryView,
      meta: {requiresAuth: true}
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationView,
      meta: {requiresAuth: true}
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log("Check route....")
  const userStore = useUserStore();
  userStore.fetchUser();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("Must be logged...")
    if (userStore.user == null) {
      console.log("Unauthorized -> redirect to login")
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    console.log("Must be admin ...")
    if (userStore.user == null || !userStore.user.isSuperAdmin) {
      console.log("Unauthorized -> redirect to login")
      next({ name: 'login' })
    } else {
      next()
    }
  } else  {
    next() 
  }
}})

/** router.beforeEach((to, from, next) => {

  if (to.name !== 'login' && to.name !== 'signup' && to.name !== 'home' && 
    to.name !== 'about' && user == null) next({ name: 'login' })
  else next()
}) */

export default router
