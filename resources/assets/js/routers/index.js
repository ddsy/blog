/**
 * Created by ff on 16/12/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const App = () => System.import('../components/App.vue')
const Room = () => System.import('../components/Room.vue')
const ConsoleIndex = () => System.import('../components/ConsoleIndex.vue')
const Console = () => System.import('../views/Console.vue')
const Login = () => System.import('../views/Login.vue')

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {path: '/', redirect: 'login'},
        {path: '/login', component: Login},
        {
            path: '/admin',
            component: Console,
            children: [
                {path: '', redirect: 'index' },
                {path: 'index', component: ConsoleIndex },
                {path: 'rooms', component: Room},
                {path: 'shops', component: App},
            ]
        }
    ]
});

export default router;
