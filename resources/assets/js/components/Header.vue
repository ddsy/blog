<template>
    <el-row>
        <el-col :span="20">
            <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="5"><i class="iconfont icon-list"></i>
                    <router-link to="/console/data">数据管理</router-link>
                </el-menu-item>
                <el-menu-item index="1"><i class="iconfont icon-friend"></i>用户行为分析</el-menu-item>
                <el-menu-item index="2"><i class="iconfont icon-share"></i>
                    <router-link to="/console/relation">通连关系分析</router-link>
                </el-menu-item>
                <el-submenu index="3">
                    <template slot="title"><i class="iconfont icon-friendfill"></i>黑白名单</template>
                    <el-menu-item index="3-1">
                        <router-link to="/console/shops">监控</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">名单管理</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="iconfont icon-addressbook"></i>用户信息</template>
                    <el-menu-item index="4-1">
                        <router-link to="/console/rooms">查询</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="iconfont icon-profile"></i>管理员</template>
                    <el-menu-item index="6-1">用户信息</el-menu-item>
                    <el-menu-item index="6-2">修改密码</el-menu-item>
                    <el-menu-item index="6-3">角色管理</el-menu-item>
                    <el-menu-item index="6-4">用户管理</el-menu-item>
                    <el-menu-item index="6-5">数据查看</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-col :span="4" class="btn-group">
            <el-button type="info" @click="exit"><i class="iconfont icon-exit"></i> 退出系统</el-button>
        </el-col>
    </el-row>
</template>

<style lang="sass" scoped>
    .btn-group {
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
    }

    .el-menu-demo {
        user-select: none;
    }

    .el-menu-item a {
        color: inherit;
        display: inline-block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        &:hover, &:focus {
                      text-decoration: none;
                      color: red;
                  }
    }
    .el-menu-item .router-link-active {
        color: #20a0ff;
    }
</style>

<script>
    export default {
        methods: {
            exit() {
                this.$router.push('/login');
            }
        }
    }
</script>
