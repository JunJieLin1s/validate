import { createMemoryHistory, createRouter } from 'vue-router'

import ValidateView from './Views/ValidateView.vue'

const routes = [
  { path: '/', component: ValidateView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router