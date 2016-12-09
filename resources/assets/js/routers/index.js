/**
 * Created by ff on 16/12/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Room from '../components/Room.vue'
import App from '../components/App.vue'
import Console from '../views/Console.vue'
import Login from '../views/Login.vue'
import ConsoleIndex from '../components/ConsoleIndex.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: App},
        {path: '/login', component: Login},
        {
            path: '/admin',
            component: Console,
            children: [
                {path: '', component: ConsoleIndex },
                {path: 'index/a', component: ConsoleIndex },
                {path: 'rooms', component: Room}
            ]
        }
    ]
});

export default router;