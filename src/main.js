// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "nprogress/nprogress.css";
import "./assets/font/font.css";
// import "@/icons"; => this breaks the app
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);

// public style
import "@/assets/css/style.scss";
import "@/assets/css/index.scss";
import { resizeScale } from "@/resize.js";
import animated from "animate.css";

Vue.use(animated);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
resizeScale();
