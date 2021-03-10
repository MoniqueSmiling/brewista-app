import { createApp } from 'vue';
// import { createStore } from 'vuex';

import App from './App.vue';
import router from './router.js';

// const store = createStore({
//     state() {
//         return {
//             text: 'Hi, I am working!'
//         };
//     }
// });
const app = createApp(App);

app.use(router);
// app.use(store);
app.mount('#app');