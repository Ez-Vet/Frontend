import { createRouter, createWebHistory } from "vue-router";

import cardCommunityListComponent from "./community/components/card-community-list.component.vue";
import petsComponent from "./ezvet/components/pets/pets.component.vue";
import loginformComponent from "./ezvet/components/loginform.component.vue";

const routes = [
    { path: '/community', component: cardCommunityListComponent },
    { path: '/pets', component: petsComponent },
    //{ path: '/appointments', component:  },
    //{ path: '/notifications', component:  },
    //{ path: '/home', component:  },
    //{ path: '/contact', component:  },
    { path: '/login', component: loginformComponent },
    //{ path: '/register', component:  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
