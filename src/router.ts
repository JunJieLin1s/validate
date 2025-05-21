import { createWebHistory, createRouter } from 'vue-router'

import Validate1View from './views/Validate1View.vue'
import Validate2View from './views/Validate2View.vue'
import Validate3View from './views/Validate3View.vue'
import Validate4View from './views/Validate4View.vue'
import Validate5View from './views/Validate5View.vue'

const routes = [
  { path: '/', name: 'Validatie1', component: Validate1View },
  { path: '/validate2', name: 'Validatie2', component: Validate2View },
  { path: '/validate3', name: 'Validatie3', component: Validate3View },
  { path: '/validate4', name: 'Validatie4', component: Validate4View },
  { path: '/validate5', name: 'Validatie5', component: Validate5View }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
