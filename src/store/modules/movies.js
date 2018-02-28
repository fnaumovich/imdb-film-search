import * as types from '../mutation-types';
import apiService from '@/api/apiService';

export default {
    namespaced: true,
    state(){
        return {
            movies: [],
            movie: {},
            initialized: false
        }
    } ,
    getters: {
        getMovies(state) {
            return state.movies;
        },
        getMovie(state) {
            return state.movie;
        }
    },
    mutations: {
        [types.FETCH_MOVIES](state, moviesList) {
            state.initialized = true;
            state.movies = moviesList;
        },
        [types.FETCH_MOVIE](state, movie) {
            state.movie = movie;
        }
    },
    actions: {
        async fetchMovies(store, search) {
            const moviesList = await apiService.getMovies(search);
            store.commit(types.FETCH_MOVIES, moviesList);
        },
        async fetchMovie(store, search) {
            const movie = await apiService.getMovie(search);
            store.commit(types.FETCH_MOVIE, movie);
        }
    }
};
