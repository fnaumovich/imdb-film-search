<template>
    <section class="film-item">
        <div class="film-item__wrapper">
            <div class="film-item__img-wrapper">
                <router-link :to="{name: 'Film', params: {id: film.imdbID}}">
                    <img v-bind="{ src: film.Poster, alt: film.Title }">
                </router-link>
            </div>
            <div class="film-item__title"><router-link :to="{name: 'Film', params: {id: film.imdbID}}">{{ film.Title }}</router-link></div>
            <div class="film-item__year">{{ film.Year }}</div>
            <div class="film-item__id">{{ film.imdbID }}</div>
        </div>
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
    $block-name: 'film-item';

    .film-item {
        width: 33.3%;
        padding: 10px;

        &__wrapper {
            margin-bottom: 20px;
            padding: 10px;
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
            }
        }
    }
</style>