<template>
    <el-menu class="el-menu-demo" :default-openeds="['1']">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户行为分析</template>
            <el-menu-item index="1-1"><router-link to="/admin/index">控制台</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/admin/rooms">房间列表</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/admin/shops">购物车</router-link></el-menu-item>
    </el-menu>
</template>

<style lang="sass" scoped>
    .router-link-active {
        color: #20a0ff;
    }
    .el-menu-demo {
        box-shadow: 0 0 10px grey;
        border: 1px grey;
        width: 200px;
        user-select: none;
    }
    .el-menu-item a {
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        &:hover, &:focus {
           text-decoration: none;
           color: red;
        }
    }
</style>

<script>
    export default {

    }
</script>