import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import {obj} from './assets/js/utils'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
=======
import { obj } from './assets/js/utils'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

>>>>>>> 497c470... detail
Vue.config.productionTip = false

new Vue({
   router,
   store,
   mounted() {
      obj.setRem();
   },
   render: h => h(App)
}).$mount('#app')
