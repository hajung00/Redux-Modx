const { createStore } = require('redux');

// 새로운 state 만들어 줌
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

// 초기 state
const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

// store 생성
const store = createStore(reducer, initialState);
console.log('1st', store.getState());

// 1. 동적 action 만드는 creater
const changeCompA = (data) => {
  return {
    // action
    type: 'CHANGE_COMP_A',
    data,
  };
};

// 2. 정적 action -> 변경할 때마다 수없이 늘어남.
// const changeCompA = {
//   type: 'CHANGE_COMP_A',
//   data: 'b',
// };

store.dispatch(changeCompA((data = 'b')));
console.log('2st', store.getState());

/* 1. createStore(reducer, initialState)로 store 생성 
      reducer: 새로운 state 만들어 줌.
      initialState: 초기 상태
   2. 동적 action 만드는 creater 생성()
   3. dispatch를 통해 action 실행 */
