<template>
    <section>
        <div class="form">
            <div class="form__row">
                <input
                    type="text"
                    class="form__input"
                    placeholder="Введите название фильма"
                    v-model="filmName"
                    @keyup.prevent.enter="fetchMovies()"
                >
                <button type="submit" class="form__search-btn" @click.prevent="fetchMovies()">Поиск</button>
            </div>
        </div>
        <section class="films-wrapper">
            <o-films :key="film.imdbID" v-for="film in getMovies" v-bind="{ film }"></o-films>
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex';
    import oFilms from './Films.vue';

    export default {
        name: 'main-app',
        data() {
            return {
                filmName: ''
            }
        },
        computed: {
            ...mapGetters(['getMovies'])
        },
        methods: {
            fetchMovies() {
                const search = this.filmName;
                this.$store.dispatch('fetchMovies', { search });
            }
        },
        components: {
            oFilms
        },
        created() {
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
            flex: 1;
        }

        &__search-btn {
            flex: 0;
        }
    }

    .films-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
</style>
