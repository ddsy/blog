<template>
    <div class="mainlayout">
        <my-header class="header"></my-header>
        <transition name="slide-fade">
            <router-view class="view content"></router-view>
        </transition>
        <my-footer class="footer"></my-footer>
    </div>
</template>
<style lang="sass" scoped>
    .mainlayout {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .content {
        flex: auto;
    }
</style>
<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    export default {
        components: {
            'my-header': Header,
            'my-footer': Footer,
        }
    }
</script>