<template>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link to="/login">用户登录</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/admin/index/a">控制台</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/admin/rooms">购物车</router-link></el-menu-item>
    </el-menu>
</template>

<style lang="sass" scoped>
    .router-link-active {
        color: red;
    }
    .el-menu-item a {
        display: block;
        height: 100%;
        width: 100%;
        &:hover, &:focus {
             text-decoration: none;
        }
    }
</style>

<script>
    export default {

    }
</script>