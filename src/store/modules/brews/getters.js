export default ({
    brews(state) {
        return state.brews;
    },
    hasBrews(state) {
        return state.brews && state.brews.length > 0;
    }
});