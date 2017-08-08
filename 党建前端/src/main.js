// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';

import router from './router'

import 'mint-ui/lib/style.css'



Vue.config.productionTip = false;

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
router.beforeEach(function (to, from, next) {
  if(to.meta.role){
    var user=localStorage.getItem('token');
    if(user){
      next()
    }
    else{
      next({
        path:"/login"
      })
    }
  }
  else{
    next()
  }
});
