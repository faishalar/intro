import './bootstrap';
import {createApp} from 'vue'
import App from './App.vue'

import Depan from './pages/Depan.vue'
import Pengalaman from './pages/Pengalaman.vue'
import About from './pages/About.vue'
import { createWebHistory, createRouter } from 'vue-router';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//vue-motion
import { MotionPlugin } from '@vueuse/motion'

//mdi
import '@mdi/font/css/materialdesignicons.css'


const routes=[
  {
    path:'/',
    component:Depan
  },
  {
    path:'/pengalaman',
    component:Pengalaman
  },
  {
    path:'/tentang-saya',
    component:About
  }
]

const router=new createRouter({
  routes,
  history : createWebHistory()
})

const vuetify = createVuetify({
  components,
  directives,
})
const app =createApp(App);
app.use(MotionPlugin)
app.use(router);
app.use(vuetify).mount('#app');
