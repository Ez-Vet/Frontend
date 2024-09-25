import { createRouter, createWebHistory } from "vue-router";
import login from '../ezvet/components/login/loginform.component.vue'

import register from '../ezvet/components/login/register.component.vue'
import notFoundComponent from '../public/not-found.component.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login", component: login
        },
        {
            path: "/register", component: register
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: notFoundComponent
        }
    ]
});
export default router;