// configure our store here
const configureStore = require('@reduxjs/toolkit').configureStore;
const chefReducer = require('../features/chef/chefSlice');
const clientReducer = require('../features/client/clientSlice');
const userReducer = require('../features/user/userSlice');
const customerReducer = require('../features/customer/customerSlice');

// logger middleware
const createLogger = require('redux-logger').createLogger;
const logger = createLogger();

const store = configureStore({
    reducer: {
        chef: chefReducer,
        cli: clientReducer,
        user: userReducer,
        customer: customerReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

module.exports = store;