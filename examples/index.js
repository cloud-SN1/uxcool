import Vue from 'vue';

import router, { routes } from './router';
import App from './app.vue';
import store from './store';
// import uxCool from '@suning/uxcool';

Vue.config.productionTip = false;
// Vue.use(uxCool);
const vm = new Vue({
  router,
  store,
  render(h) {
    return h(App, {
      props: {
        routes,
      },
    });
  },
});
vm.$mount('#app');
