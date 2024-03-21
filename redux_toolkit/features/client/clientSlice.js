const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    count: 0
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        increment: function(state, action){
            // instead of returning new state it will direclty manipulate the state using immer
            state.count += action.payload
        },
        decrement: function(state){
            state.count--;
        },
        clientNeedChef: function(state){
            state.count++;
        }
    }
});

// reducer will be default export
module.exports = clientSlice.reducer;

// actions will be named export
module.exports.clientActions = clientSlice.actions;
 