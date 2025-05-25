import { ADD, SUBTRACT, RESET } from "./actions.js";

/**
 * Creates a redux store to manage the sate of an appliction
 * 
 * @function
 * @param {Function} reducer - Reducer function that handles state updates based on the actions
 * @returns {Object} reducer function that handles the state updtes based on actions
 * 
 */

const createStore = (reducer) => {
  let state; // Holds the current state
  let listeners = []; // Array of functions to call on state change

  
    /**
     * Gets the current state
     * 
     * @function 
     * @returns {Object} - The current state object
     */
  const getState = () => state;

    /**
     * Dispatches an action to update the state
     * 
     * @function
     * @param {string} actionType - Matches a key in `actions`
     * @returns {string} - The dispatched action type
     */

  const dispatch = (action) => {
    state = reducer(state, action); // Update the state using the reducer
    listeners.forEach((listener) => listener()); // Notify all subscribers
  };

    /**
     * Subscribes a listener to a state changes.
     * 
     * @function 
     * @param {Function} listener - A callback function to run when the state changes
     * @returns {Function} - An unsubscribe function to remove the listener
     */
  const subscribe = (listener) => {
    listeners.push(listener);
    // Returns an unsubscribe function
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize the state with an empty dispatch
  dispatch({});

  return { getState, dispatch, subscribe };
}

/**
 * Reducer function to handle the counter actions
 * This function modifies the state based on the action typ.
 * @function
 * @param {Object} state - The current state of the counter
 * @param {Object} action - The action dispatched, containing a type property
 * @returns {Object} The new state after applying the action
 */
const counterReducer = (state = { count: 0 }, action) => {
    if (action.type === ADD) {
        return { count: state.count + 1 };
      } else if (action.type === SUBTRACT) {
        return { count: state.count - 1 };
      } else if (action.type === RESET) {
        return { count: 0 };
      } else {
        return state;
      }
  }


// Create a store instance with the counterReducer to manage the counter state
const store = createStore(counterReducer);

export default store;
