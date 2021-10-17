import Vue from "vue";

import App from "./App.vue";

export default (el) => {
    new Vue({
        el,
        template: "<App/>",
        components: { App },
    });
}