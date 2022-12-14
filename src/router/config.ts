import {createRouter, createWebHashHistory} from "vue-router";
import {routes} from "@/router/routes";

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'link-is-active',
    strict: true
});