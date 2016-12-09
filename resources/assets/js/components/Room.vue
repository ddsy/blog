<template>
    <div>
        <h3>Rooms List</h3>
        <table class="table">
            <thead>
            <tr>
                <th>Room Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="room in rooms">
                <td> {{ room.name }}</td>
            </tr>
            </tbody>
        </table>
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