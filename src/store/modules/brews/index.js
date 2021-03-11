import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            brews: [
                {
                    id: 'b1',
                    name: 'Calahute Alto',
                    brewer: 'Nordhavn Coffee',
                    description: 'Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminiscent of tart fruit.',
                    varieties: ['Castilo', 'Caturra'],
                    process: 'washed',
                    roast: 'Medium',
                    country: 'Guatamala',

                }, {
                    id: 'b2',
                    name: 'Beza',
                    brewer: 'Impact Roasters',
                    description: 'Strong, rich taste combined with a deep spicy, citrus and floral aroma',
                    varieties: ['Castilo', 'Caturra'],
                    process: 'sun dried',
                    roast: 'Medium',
                    country: 'Ethiopia'

                }
                // {
                //             id:, 
                //             name:,
                //             user:,
                //             description:,
                //             varieties:,
                //             process:,
                //             roast:,
                //             country,

                //     }
        ]
        }
    },
    mutations,
    actions,
    getters,
}