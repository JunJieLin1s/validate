import { createMemoryHistory, createRouter } from 'vue-router'

import Validate1View from './views/Validate1View.vue'
import Validate2View from './views/Validate2View.vue'
// import Validate3View from './views/Validate3View.vue'
// import Validate4View from './views/Validate4View.vue'
// import Validate5View from './views/Validate5View.vue'
// import Validate6View from './views/Validate6View.vue'
// import Validate7View from './views/Validate7View.vue'
// import Validate8View from './views/Validate8View.vue'
// import Validate9View from './views/Validate9View.vue'
// import Validate10View from './views/Validate10View.vue'
// import Validate11View from './views/Validate11View.vue'
// import Validate12View from './views/Validate12View.vue'


const routes = [
  { path: '/', component: Validate1View },
  { path: '/validate2', component: Validate2View },
  // { path: '/validate3', component: Validate3View },
  // { path: '/validate4', component: Validate4View },
  // { path: '/validate5', component: Validate5View },
  // { path: '/validate6', component: Validate6View },
  // { path: '/validate7', component: Validate7View },
  // { path: '/validate8', component: Validate8View },
  // { path: '/validate9', component: Validate9View },
  // { path: '/validate10', component: Validate10View },
  // { path: '/validate11', component: Validate11View },
  // { path: '/validate12', component: Validate12View },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router