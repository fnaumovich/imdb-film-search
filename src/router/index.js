import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import cFilm from '@/pages/movies/cMovie';
import Home from '@/pages/movies/index.vue';

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
            component: cFilm
        }
    ]
});
