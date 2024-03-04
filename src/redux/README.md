[← Back to root README](../../README.md)

---

## Redux state management

Use redux only for global state management. For local state management, use React's built-in state management (`useState`, `useReducer`, etc).

For Redux usage, we use the [Redux Toolkit](https://redux-toolkit.js.org/).

### Creating slices

Whenever you need to create new shared state, create a new slice. A slice is a collection of reducers, actions and selectors that are related to each other within the same context - e.g. `header`, `user`, `cart`, etc. and should reside in a folder with the same name. There you can create `slice.ts` and `selectors.ts` files.
