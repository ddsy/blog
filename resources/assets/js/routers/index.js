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
const DataManage = () => System.import('../views/DataManage.vue')

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {path: '/', redirect: 'login'},
        {path: '/login', component: Login},
        {
            path: '/console',
            component: Console,
            children: [
                {path: '', redirect: 'home'},
                {path: 'home', component: ConsoleIndex},
                {path: 'data', component: DataManage},
                {path: 'behavior', component: Room},
                {path: 'relation', component: ConsoleIndex},
                {path: 'blackwhitelist', component: App},
                {path: 'user', component: App},
                {path: 'admin', component: App},
            ]
        }
    ]
});

export default router;
