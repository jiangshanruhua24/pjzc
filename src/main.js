import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD

/* 样式重置 */
import { obj } from './assets/js/utils'
import('./assets/css/common.css')


//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//vant
=======
<<<<<<< HEAD
import {obj} from './assets/js/utils'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
=======
import { obj } from './assets/js/utils'

>>>>>>> 8f059e79b4b60a3418e7213635cf88e433a6cc52
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

<<<<<<< HEAD
Vue.config.productionTip = false
new Vue({
  router,
  store,
  mounted() {
    obj.setRem();
  },
  render: h => h(App)
=======
>>>>>>> 497c470... detail
Vue.config.productionTip = false

new Vue({
   router,
   store,
   mounted() {
      obj.setRem();
   },
   render: h => h(App)
>>>>>>> 8f059e79b4b60a3418e7213635cf88e433a6cc52
}).$mount('#app')
