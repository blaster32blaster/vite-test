import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue';
import HelloWorld from '/src/components/HelloWorld.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
