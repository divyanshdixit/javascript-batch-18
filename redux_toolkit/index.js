const store = require('./app/store');
const chefActions = require('./features/chef/chefSlice').chefActions;
const clientActions = require('./features/client/clientSlice').clientActions;
const fetchUsers = require('./features/user/userSlice').userActions;
const fetchCustomers = require('./features/customer/customerSlice').customerActions;

// console.log('init state', store.getState())
const unsubscribe = store.subscribe(() => {
    // console.log('uodated state:', store.getState())
})

store.dispatch(fetchUsers());
store.dispatch(fetchCustomers());
// store.dispatch(chefActions.increment(1))
// store.dispatch(chefActions.increment(1))
// store.dispatch(chefActions.decrement(1))

// store.dispatch(clientActions.increment(1))
// store.dispatch(clientActions.clientNeedChef())
// // store.dispatch(clientActions.increment(2))
// store.dispatch(clientActions.decrement())

// this function will not run in case of async actions

// unsubscribe();