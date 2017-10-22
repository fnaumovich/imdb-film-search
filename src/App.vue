<template>
    <section id="app">
        <div class="container">
            <section class="logo-wrapper">
                <img src="./assets/logo.png">
            </section>

            <router-view></router-view>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    #app {
        padding-top: 60px;
    }

    .container {
        width: 1100px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px;
    }

    .logo-wrapper {
        text-align: center;
    }
</style>
