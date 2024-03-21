const { clientActions } = require('../client/clientSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    count: 0,
    client: 0
}

const chefSlice = createSlice({
    name: 'chef',
    initialState,
    reducers: {
        increment: function(state, action){
            state.count += action.payload; // here slice can directly manipulate the state object using immer library behind scenes
        },
        decrement: function(state, action){
            state.count -= action.payload
        }
    },
    // this one is old method:

    // extraReducers: {
    //     ['client/clientNeedChef']: function(state){
    //         state.client++;
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(clientActions.clientNeedChef, (state) => {
            state.client++;
        })
    }
});

// export reducer as default 
// export actions as named export

module.exports = chefSlice.reducer;
module.exports.chefActions = chefSlice.actions;
