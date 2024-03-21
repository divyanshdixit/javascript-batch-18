const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const initialState = {
    loading:false,
    users: [],
    error: ''
};

// second argument contain async logic and create payload and return promise.
// this will dispatch promise lifecycle actions that will useed by extraReducers

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return fetch('url').then(res => res.data.map(user => user.id))
}); 

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})

module.exports = userSlice.reducer;
module.exports.userActions = fetchUsers;