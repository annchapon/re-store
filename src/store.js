import { createStore } from 'redux';

import reducer from './reducers';

/* Store Enhancer
const enhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return originalDispatch({
        type: action
      });
    }
    return originalDispatch(action);
  };
  return store;
};
*/

/* Middleware
const logMiddleware = (store) = (dispathch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};
*/

const store = createStore(reducer);

/* Monkey patching
const originalDispatch = store.dispatch;
store.dispatch = (action) => {
  if (typeof action === 'string') {
    return originalDispatch({
      type: action
    });
  }
  return originalDispatch(action);
};
*/

// store.dispatch('HELLO_WORLD');

export default store;