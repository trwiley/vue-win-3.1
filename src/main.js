import Vue from 'vue'
import App from './App.vue'
//import DragItDude from '../node_modules/vue-drag-it-dude/dist/vue-drag-it-dude.esm'
import './assets/scss/styles.scss'

Vue.config.productionTip = false

//Vue.use(DragItDude)

new Vue({
  render: h => h(App),
}).$mount('#app')
