import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FormPage from '../components/FormPage.vue'
import ContactsPage from '../components/ContactsPage.vue'
import ReviewsPage from '../components/ReviewsPage.vue'
import HotelsPage from '../components/HotelsPage.vue'
import HotelsSochi from '../components/HotelsSochi.vue'
import HotelDetails from '../components/HotelDetails.vue'
import HotelDetailsSochi from '../components/HotelDetailsSochi.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/form', component: FormPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/reviews', component: ReviewsPage },
  { path: '/hotels', component: HotelsPage },
  { path: '/hotels-sochi', component: HotelsSochi },
  { path: '/hotel-details', component: HotelDetails },
  { path: '/hotel-details-sochi', component: HotelDetailsSochi }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
