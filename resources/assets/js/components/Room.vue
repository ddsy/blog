<template>
    <div>
        <h2>房间列表</h2>
        <el-table :data="rooms" style="width: 100%">
            <el-table-column prop="name" label="名称"></el-table-column>
        </el-table>
    </div>
</template>
<style lang="sass" scoped>
    .table {
        background: beige;
    }
</style>
<script>
    export default {
        mounted() {
            this.fetchRoomList()
        },
        data: function () {
            return {
                rooms: []
            }
        },
        methods: {
            fetchRoomList: function () {
                this.$http.get('/api/rooms').then((response) => {
                    this.$set(this, 'rooms', response.data);
                });
            }
        }
    }
</script>