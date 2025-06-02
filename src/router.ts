import { createWebHistory, createRouter } from 'vue-router'

import AlertTestView from '@/views/AlertTestView.vue'
import ValidateOpdrachtView from '@/views/ValidateOpdrachtView.vue'
import Validate2View from '@/views/Validate2View.vue'

const routes = [
  { path: '/alerttest', name: 'AlertTestView', component: AlertTestView },
  { path: '/', name: 'ValidateOpdrachtView', component: ValidateOpdrachtView },
  { path: '/validate2', name: 'Validatie2', component: Validate2View },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
