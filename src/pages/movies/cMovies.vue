<template>
    <section class="film-item">
        <router-link class="film-item__link" :to="{ name: 'Film', params: { id: movie.imdbID } }">
            <div class="film-item__wrapper">
                <div class="film-item__img-wrapper">
                    <img v-bind="{ src: movie.Poster, alt: movie.Title }">
                </div>
                <div class="film-item__title">{{ movie.Title }}</div>
                <div class="film-item__year">{{ movie.Year }}</div>
                <div class="film-item__id">{{ movie.imdbID }}</div>
            </div>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: 'movie',
        props: {
            movie: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss">
    $block-name: 'film-item';

    .film-item {
        width: 33.3%;
        padding: 10px;
        color: #000;

        &__link {
            display: block;
            width: 100%;
            height: 100%;
            color: currentColor;

            &:hover {
                color: currentColor;
                text-decoration: none;
            }
        }

        &__wrapper {
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
        }

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

        &:hover {
            .#{$block-name}__wrapper {
                box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
                transform: scale(1.02);
                transition: all 0.3s ease-in-out;
            }
        }
    }
</style>