const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const initialState = {
    loading: false,
    customers: [],
    error: ''
};

// createAsyncThunk('actiontype', () => {creating payload})
// 
const fetchCustomers = createAsyncThunk('customer/fetchCustomers', () => {
    return fetch('url').then(res => res.data.map(customer => customer.id));
});

const customerSlice = createSlice({
    name:'customer',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCustomers.pending, (state, action)=> {
            state.loading = true;
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading = false;
            state.customers = action.payload;
            state.error = ''
        });
        builder.addCase(fetchCustomers.rejected, (state, action)=> {
            state.loading = false;
            state.customers = [];
            state.error = action.error.message;
        });
    }
})

module.exports = customerSlice.reducer;
module.exports.customerActions = fetchCustomers;