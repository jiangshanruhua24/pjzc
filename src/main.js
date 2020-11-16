import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/* 样式重置 */
import { obj } from '@/assets/js/utils'
import('@/assets/css/common.css')


//axios
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

//vant
Vue.use(Vant);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
   mounted() {
      window.onresize = function () {
         obj.setRem();
      }
      this.$router.push('/home');
   },
   router,
   store,
   render: h => h(App)
}).$mount('#app')

