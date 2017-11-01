<template>
    <section>
        <div class="form">
            <div class="form__row">
                <input
                    type="text"
                    class="form__input"
                    placeholder="Введите название фильма"
                    v-model="filmName"
                    @keyup.enter="loadMovies"
                >
                <button type="submit" class="form__search-btn" @click.prevent="loadMovies">Поиск</button>
            </div>
        </div>
        <section v-if="movies.length" class="films-wrapper">
            <c-movies  :key="movie.imdbID" v-for="movie in movies" v-bind="{ movie }"></c-movies>
        </section>
        <h2 class="not-found" v-else-if="initialized">Фильмы не найдены</h2>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import cMovies from './cMovies.vue';

    export default {
        name: 'main-app',
        data() {
            return {
                filmName: ''
            }
        },
        computed: {
            ...mapState('movies', ['movies', 'initialized'])
        },
        methods: {
            loadMovies() {
                this.fetchMovies(this.filmName);
            },

            ...mapActions('movies', ['fetchMovies'])
        },
        components: {
            cMovies
        }
    }
</script>

<style lang="scss">
    .form {
        margin-bottom: 30px;

        &__row {
            display: flex;
            flex-flow: row nowrap;
        }

        &__input {
            flex: 1 0 auto;
        }

        &__search-btn {
            flex: 0 0 auto;
        }
    }

    .films-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .not-found {
        text-align: center;
    }
</style>
