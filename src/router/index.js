import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Film from '@/components/Film';
import Home from '@/components/Home.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/film/:id',
            name: 'Film',
            component: Film
        }
    ]
});
