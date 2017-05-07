export default {
    state: {
        sss: '22222222222'
    },
    mutations: {
        createInstance (state, index) {
            console.log("。。。。。。。。。。ok~~~~~");
            state[index] = {
                msg: 'this is demo',
            }
        },

        deleteInstance (state, index) {
            delete state[index];
        },

        setMsg (state, index, msg) {
            state[index].msg = msg
        }
    }
}