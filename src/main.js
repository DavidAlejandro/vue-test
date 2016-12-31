import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Components
import GetRequest from './templates/get-request.vue';
import PostRequest from './templates/post-request.vue';


const routes = [
  { path: '/get-request', component: GetRequest },
  { path: '/post-request', component: PostRequest },
];

Vue.use(VueRouter); 

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
