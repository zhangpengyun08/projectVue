const user = {
    state: {
        id:'1111',
        name:''
    },
    mutations: {
        SET_ID: (state, id) => {
            state.id = id
        },
        SET_NAME: (state, name) => {
            state.name = name
        }
    },
    // getters: {
    //     ip: states => states.ip,
    //     names: states => states.name
    // }
}
export default user