import { createStore } from 'vuex';

import brewsModule from './modules/brews/index.js';
import methodsModule from './modules/methods/index.js';

const store = createStore({
    modules: {
        brews: brewsModule,
        methods: methodsModule
    },
});

export default store;