import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin, PaginationPlugin} from 'bootstrap-vue'
import vuetify from './plugins/vuetify'
import VueDragscroll from 'vue-dragscroll'
import './plugins/vuetify'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PaginationPlugin)
Vue.use(VueDragscroll)
Vue.use(PerfectScrollbar)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
