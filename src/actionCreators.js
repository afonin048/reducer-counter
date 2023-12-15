import { DECREMENT, INCREMENT, INCREMENT_BY_VALUE, RESET } from "./actions";

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const reset = () => ({
    type: RESET
})

export const increment_by_value = (value) => ({
    type: INCREMENT_BY_VALUE,
    payload: value
})