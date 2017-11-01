<template>
    <section class="movie">
        <div class="movie__wrapper">
            <div class="movie__img-wrapper">
                <img v-bind="{ src: movie.Poster, title: movie.Title }">
            </div>
            <h2 class="movie__title">{{ movie.Title }}</h2>
            <div class="movie__year"><b>Year:</b> {{ movie.Year }}</div>
            <div class="movie__released"><b>Released:</b> {{ movie.Released }}</div>
            <div class="movie__country"><b>Country:</b> {{ movie.Country }}</div>
            <div class="movie__rating"><b>Rating:</b> {{ movie.imdbRating }}</div>
            <div class="movie__box-office"><b>Box Office:</b> {{ movie.BoxOffice }}</div>
            <div class="movie__website">
                <a target="_blank" v-bind="{ href: movie.Website }">website</a>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'movie-itself',
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