export default({
    methods(state) {
        return state.methods;
    },
    hasMethods(state) {
        return state.methods && state.methods.length > 0;
    }
});