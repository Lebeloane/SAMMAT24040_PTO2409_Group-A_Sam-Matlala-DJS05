import store from "./store.js"
import { increment, decrement, reset } from "./actions.js"

// Log the state every time it changes
store.subscribe(() => console.log("Current State:", store.getState()))

// Initial State Verification
console.log("Scenario 1: Initial State Verification")
console.log("Initial State:", store.getState())

// Incrementing the Counter
console.log("Scenario 2: Incrementing the Counter")
store.dispatch(increment())
store.dispatch(increment())


// Decrementing the Counter
console.log("Scenario 3: Decrementing the Counter")
store.dispatch(decrement())


// Resetting the Counter
console.log("Scenario 4: Resetting the Counter")
store.dispatch(reset())

