import Vue from 'vue'
import App from './App.vue'
import MonkeyUncle from './MonkeyUncle.vue'
import Monkey from './Monkey.vue'

// Vue.use(Comp);

Vue.component('monkey-uncle', MonkeyUncle);
Vue.component('monkey', Monkey);
new Vue({
  el: '#app',
  render: h => h(App)
})
