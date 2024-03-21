const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creator:

function incrementAction(){
    // action => object
    return {
        type: INCREMENT,
        by: 2
    }
}

function decrementAction(){
    return {
        type: DECREMENT,
        by: 1
    }
}

const initState = {
    count: 0,
}

// reducer: function(prevState, action) => return newState

const reducer = function(state = initState, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.by
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.by
            }
        default:
            return state;
    }
}

const incrementReducer = function(state = initState, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.by
            }
        default:
            return state;
    }
}

const decrementRedcuer = function(state = initState, action){
    switch(action.type){
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.by
            }
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    add: incrementReducer,
    subtract: decrementRedcuer
});

// oonly one store for entire application: 

// const store = createStore(reducer); // work for single reducer

// for multiplereducer
const store = createStore(rootReducers) ;

console.log('init state:', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('update state:', store.getState())
}) // callback function run only when state willupdate

store.dispatch(incrementAction());
store.dispatch(decrementAction());

// to unsubscribe form the store: 
unsubscribe();


