import {createRouter , createWebHistory} from "vue-router";

import cardCommunityListComponent from "./community/components/card-community-list.component.vue";
import petsComponent from "./ezvet/components/pets/pets.component.vue";

const routes = [
    { path: '/community', component: cardCommunityListComponent },
    { path: '/pets', component: petsComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
