import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { defineCustomElements } from "@slate/web-components/dist/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/wc-\w*/];

defineCustomElements(window);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
