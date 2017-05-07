export default {
    state: {
        type: '',
        index: ''
    },
    mutations: {
        setCurrentComp(state, type, index){
            state.type = type;
            state.index = index;
        }
    }
}