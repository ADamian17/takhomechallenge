import { createStore, applyMiddleware, compose } from 'redux';

// middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

let middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger];
} else {
  middlewares = [...middlewares];
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
