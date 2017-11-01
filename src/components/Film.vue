<template>
    <section class="movie">
        <div class="movie__wrapper">
            <div class="movie__img-wrapper">
                <img v-bind="{ src: movie.Poster }">
            </div>
            <h2 class="movie__title">{{ movie.Title }}</h2>
            <div class="movie__year"><b>Year:</b> {{ movie.Year }}</div>
            <div class="movie__year"><b>Released:</b> {{ movie.Released }}</div>
            <div class="movie__year"><b>Country:</b> {{ movie.Counry }}</div>
            <div class="movie__year"><b>Rating:</b> {{ movie.Rating }}</div>
            <div class="movie__year"><b>Box Office:</b> {{ movie.BoxOffice }}</div>
            <div class="movie__year"><a target="_blank" v-bind="{ href: movie.Website }">website</a></div>
        </div>
    </section>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'film-itself',
        computed: {
            movieId() {
                return this.$route.params.id;
            },

            ...mapState('movies', ['movie']),
        },
        methods: {
            loadMovie() {
                this.fetchMovie(this.movieId);
            },

            ...mapActions('movies', ['fetchMovie'])
        },
        created() {
            this.loadMovie();
        }
    }
</script>

<style lang="scss">
    .movie {
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        border-radius: 9px;
        text-align: center;

        &__wrapper {
            padding: 20px;
        }

        &__img-wrapper {
            max-width: 100%;
            max-height: 100%;
        }
    }

</style>