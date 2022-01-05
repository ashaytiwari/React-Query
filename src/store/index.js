import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
  name: "Counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState = {
  isLoggedIn: false
};

const authSlicer = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    }
  }
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     case "TOGGLE_COUNTER":
//       return {
//         ...state,
//         showCounter: !state.showCounter
//       };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlicer.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlicer.actions;

export default store;
