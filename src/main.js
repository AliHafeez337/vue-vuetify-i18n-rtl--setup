import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store'
import vuetify from '@/plugins/vuetify'
import i18n from "./plugins/i18n";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
