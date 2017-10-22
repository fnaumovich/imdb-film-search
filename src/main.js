import Vue from 'vue';
import router from './router';
import store from './store/index';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});
