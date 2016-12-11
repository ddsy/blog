<template>
    <div class="mainlayout">
        <my-header class="header"></my-header>
        <div class="main">
            <my-slider></my-slider>
            <transition name="slide-fade">
                <router-view class="view content"></router-view>
            </transition>
        </div>
        <my-footer class="footer"></my-footer>
    </div>
</template>
<style lang="sass" scoped>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: none;
    }
    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(30px);
        opacity: 0;
    }

    .mainlayout {
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
    .main {
        display: flex;
        flex: auto;
    }
    .content {
        flex: 1;
        padding: 5px 10px;
        overflow-y: auto;
    }
    .header,.footer {
        background-color: #324057;
    }
</style>
<script>
    import Header from '../components/Header.vue'
    import Slider from '../components/Slider.vue'
    import Footer from '../components/Footer.vue'

    export default {
        components: {
            'my-header': Header,
            'my-slider': Slider,
            'my-footer': Footer,
        }
    }
</script>
