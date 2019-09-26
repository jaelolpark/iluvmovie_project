// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from './reducers/root'

// const middleware = applyMiddleware(promise,thunk)
// export default createStore(rootReducer, composeWithDevTools(middleware))




import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root'


// const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer,

    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;