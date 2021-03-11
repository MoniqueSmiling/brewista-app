import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            namespaced: true,
            methods: [
                {
                id: 'm1',
                name: 'AeroPress',
                coffeeqty: 16,
                waterqty: 230,
                quality: 'Medium',
                time: 60,
                steps: ['Add ground coffee to inverse aeropress', 'Start timer', 'Add 50ml of 93c water to aeropress for 10s', 'Stir five times', 'Add last 180ml of water and stir to mix', 'After 1 min gently press coffee into cup'],
            }, 
                {
                id: 'm2',
                name: 'French Press',
                coffeeqty: 33,
                waterqty: 500,
                quality: 'Coarse',
                time: 240,
                steps: ['Add ground coffee to French Press', 'start timer and pour water over coffee', 'stir with spoon', 'after 4 min, break through the crust of coffee on the top to let the coffee fall to the bottom', 'remove big particles and foam still float on top', 'Let coffee sit for 30sec. Then gently press down the handle'],
            }, 
                {
                id: 'm3',
                name: 'Kalita Wave',
                coffeeqty: 16,
                waterqty: 230,
                quality: 'Medium',
                time: 60,
                steps: [],
            }, 
                {
                id: 'm4',
                name: 'Cold Infusion',
                coffeeqty: 40,
                waterqty: 200,
                quality: 'Coarse',    
                time: 7200,
                steps: [],
            }, 
                {
                id: 'm5',
                name: 'Chemex',
                coffeeqty: 16,
                waterqty: 230,
                quality: 'Fine',    
                time: 180,
                steps: [],
            }, 
            //     {
            //     id:,
            //     name:,
            //     coffeeqty:,
            //     waterqty:,
            //     time:,
            //     steps:,
            // }, 
        ]          
        }
    },
    mutations,
    actions,
    getters,
}