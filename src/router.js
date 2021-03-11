import {
    createRouter,
    createWebHistory
} from 'vue-router';

import BrewsList from './pages/brews/BrewsList.vue';
import LatestBrews from './pages/brews/LatestBrews.vue';
import BrewMethods from './pages/methods/BrewMethods.vue';
import Recipe from './pages/recipe/Recipe.vue';
import NotFound from './pages/NotFound.vue';

// Setting up the router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home-brew'},
        { path: '/home-brew', component: LatestBrews},
        // List of brews
        { path: '/pick-coffee', component: BrewsList},
        { path: '/pick-coffee/:id/brew-methods', component: BrewMethods},
        { path: '/recipe/:id', component: Recipe },
        { path: '/:notFound(.*)', component: NotFound}
    ],
});

export default router;