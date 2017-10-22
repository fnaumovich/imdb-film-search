<template>
    <section class="film-item">
        <div class="film-item__img-wrapper">
            <img v-bind="{ src: film.Poster, alt: film.Title }">
        </div>
        <div class="film-item__title">{{ film.Title }}</div>
        <div class="film-item__year">{{ film.Year }}</div>
        <div class="film-item__id">{{ film.imdbID }}</div>
    </section>
</template>

<script>
    export default {
        name: 'film',
        props: {
            film: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
    .film-item {
        width: 33.3%;
        padding: 20px;

        &__img-wrapper {
            height: 429px;
            text-align: center;

            img {
                max-width: 100%;
                max-height: 100%;
            }
        }

        &__title {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
        }

        &__year {
            font-size: 16px;
            text-align: center;
        }

        &__id {
            color: tomato;
            text-align: center;
        }
    }
</style>