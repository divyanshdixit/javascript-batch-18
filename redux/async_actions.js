const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').thunk;


const initState = {
    loading: false,
    data: [],
    error: ''
}

// actions creators:

const fetchRequest = () => {
    return {
        type: 'request',
    }
}

const fetchSuccess = (users) => {
    return {
        type: 'success',
        payload: users
    }
}

const fetchFail = (error) => {
    return {
        type: 'fail',
        payload: error
    }
}

// reducer:

const reducer = (state=initState, action) => {
    switch(action.type){
        case 'request':
            return {
                ...state, 
                loading: true,
            }
        case 'success':
            return {
                ...state, 
                loading: false,
                data: action.payload
            }
        case 'fail':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
    }
}

// if we need async action creators: we need to use redux-thunk
// action creator which return a function instead of object 
// the return function is not pure , means it can have side effects (fetching apis)
// and it can dispatch actions as well.

// async action creator:

const fetchUsers = () => {
    return function(dispatch){
        // dispatch request action:
        dispatch(fetchRequest())
        fetch('url')
        .then((res) => {
            const users = res.data.map(user => user.id);
            dispatch(fetchSuccess(users))
        })
        .catch((err) => {
            console.log(err.message);
            dispatch(fetchFail(err.message))
        })
    }
}

// create store 
// to apply middlware we can applyMiddlware function

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const unsubscribe = store.subscribe(() => {
    console.log('updated state:', store.getState())
})

// dispatch our async action

store.dispatch(fetchUsers());
