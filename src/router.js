import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/home.vue";
import NotFound from "./pages/notfound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        else return { x: 0, y: 0 };
    },
});

export default router;