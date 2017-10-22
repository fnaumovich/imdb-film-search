import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Films from '@/components/Films';
import Home from '@/components/Home.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
});
