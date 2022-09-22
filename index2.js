const { createStore } = require('redux');

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
console.log('1st', store.getState());

const logIn = (data) => {
  return {
    // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

// ________________________________

store.dispatch(
  logIn(
    (data = {
      id: 1,
      name: 'hajung',
      admin: true,
    })
  )
);

console.log('login', store.getState());

store.dispatch(
  addPost(
    (data = {
      userId: 1,
      id: 1,
      content: '리덕스',
    })
  )
);
console.log('addpost', store.getState());

store.dispatch(logOut());

console.log('logout', store.getState());
