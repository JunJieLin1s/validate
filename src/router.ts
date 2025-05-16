import { createMemoryHistory, createRouter } from 'vue-router'

import Validate1View from './Views/Validate1View.vue'
// import Validate2View from './Views/Validate2View.vue'
// import Validate3View from './Views/Validate3View.vue'
// import Validate4View from './Views/Validate4View.vue'
// import Validate5View from './Views/Validate5View.vue'
// import Validate6View from './Views/Validate6View.vue'
// import Validate7View from './Views/Validate7View.vue'
// import Validate8View from './Views/Validate8View.vue'
// import Validate9View from './Views/Validate9View.vue'
// import Validate10View from './Views/Validate10View.vue'
// import Validate11View from './Views/Validate11View.vue'
// import Validate12View from './Views/Validate12View.vue'


const routes = [
  { path: '/', component: Validate1View },
  // { path: '/', component: Validate2View },
  // { path: '/', component: Validate3View },
  // { path: '/', component: Validate4View },
  // { path: '/', component: Validate5View },
  // { path: '/', component: Validate6View },
  // { path: '/', component: Validate7View },
  // { path: '/', component: Validate8View },
  // { path: '/', component: Validate9View },
  // { path: '/', component: Validate10View },
  // { path: '/', component: Validate11View },
  // { path: '/', component: Validate12View },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router