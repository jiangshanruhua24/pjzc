import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {obj} from './assets/js/utils'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted(){
    obj.setRem();
  },
  render: h => h(App)
}).$mount('#app')
