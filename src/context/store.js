import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    counter: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1
        };
      default:
        return state;
    }
  };

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

  