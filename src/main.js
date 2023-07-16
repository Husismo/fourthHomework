import Vue from 'vue'
import App from './App.vue'
import './icons';
import router from './router'
import Api from "@/api/instance"
Vue.use(Api)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
