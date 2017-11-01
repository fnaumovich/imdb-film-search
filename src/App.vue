<template>
    <section id="app">
        <div class="container">
            <section class="logo-wrapper">
                <router-link to="/">
                    <img src="./assets/logo.png">
                </router-link>
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
        min-height: 100vh;
        padding-top: 20px;
        background: #f6f6f6;
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
