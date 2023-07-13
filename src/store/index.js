import { createStore } from 'redux';

const initialState = {
  posts: [{ id: 0, title: 'Test Post' }],
  loginModal: {
    open: false
  }
}

const reducer = (state = initialState, action) => {

  // example of cloning and replacing using Object.assign
  if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }

  // example of doing the same thing, but with the spread operator
  if (action.type === 'LOAD_POSTS') {
    return {
      ...state,
      posts: state.posts.concat(action.payload)
    }
  }

  return state;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;