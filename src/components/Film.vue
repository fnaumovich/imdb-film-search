<template>
    <section class="movie">
        <div class="movie__wrapper">
            <div class="movie__img-wrapper">
                <img v-bind="{ src: movie.poster }">
            </div>
            <h2 class="movie__title">{{ movie.title }}</h2>
            <div class="movie__year"><b>Year:</b> {{ movie.year }}</div>
            <div class="movie__year"><b>Released:</b> {{ movie.released }}</div>
            <div class="movie__year"><b>Country:</b> {{ movie.counry }}</div>
            <div class="movie__year"><b>Rating:</b> {{ movie.rating }}</div>
            <div class="movie__year"><b>Box Office:</b> {{ movie.boxOffice }}</div>
            <div class="movie__year"><a target="_blank" v-bind="{ href: movie.website }">website</a></div>
        </div>
    </section>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'film-itself',
        computed: {
            movieId() {
                return this.$route.params.id;
            },
            movie() {
                return {
                    title: this.getMovie.Title,
                    poster: this.getMovie.Poster,
                    boxOffice: this.getMovie.BoxOffice,
                    counry: this.getMovie.Country,
                    rating: this.getMovie.imdbRating,
                    released: this.getMovie.Released,
                    year: this.getMovie.Year,
                    website: this.getMovie.Website,
                }
            },

            ...mapGetters(['getMovie'])
        },
        methods: {
            loadMovie() {
                this.fetchMovie({ search: this.movieId });
            },

            ...mapActions(['fetchMovie'])
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