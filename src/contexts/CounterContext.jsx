import { createContext, useReducer } from "react";
import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from '../actions';
import { decrement, increment, increment_by_value, reset } from '../actionCreators';

export const CounterContext = createContext(null);

export const CounterProvider = ({children}) => {

    const initialState = {
        count: 0
      }
    
      const reducer = (store, action) => {
        switch (action.type) {
          case INCREMENT:
            return {
              count: store.count + 1
            };
            case INCREMENT_BY_VALUE:
              return {
                count : store.count + action.payload
              };
          case DECREMENT:
            return {
              count: store.count - 1
            };
          case RESET:
            return {
              count: 0
            };
          default:
            return store;
        }
      };
    

    const [state, dispatch] = useReducer(reducer, initialState);

    const hendleIncrementCount = () => {
        dispatch(increment())
    }
    
    const hendleDecrementCount = () => {
        dispatch(decrement())
    }
    
    const hendleResetCount = () => {
        dispatch(reset())
    }
    
    const hendleIncrementByValue = (value) => {
        dispatch(increment_by_value(+value))
    }

    const providedValue = {
        state,
        onIncrement: hendleIncrementCount,
        onDecrement: hendleDecrementCount,
        onReset: hendleResetCount,
        onIncrementByValue: hendleIncrementByValue,
    }

    return (
        <CounterContext.Provider value={providedValue}>
            {children}
        </CounterContext.Provider>
    )
}