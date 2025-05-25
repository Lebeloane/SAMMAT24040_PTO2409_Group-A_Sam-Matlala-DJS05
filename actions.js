/**
 * Action types
 * The constants define the action types that can be  dispatched to the store
 */
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

/**
 * Creates an action to add the counter 
 * @returns {object} Action object with type `ADD`
 */
export const increment = () => ({ type: ADD });

/**
 * Creates an action to subract the counter
 * @returns {Object} Action object with type `SUBTRACT`
 */
export const decrement = () => ({ type: SUBTRACT });

/**
 * Create an action to reset the counter
 * @returns {Object} Action with the `RESET`
 */
export const reset = () => ({ type: RESET });


