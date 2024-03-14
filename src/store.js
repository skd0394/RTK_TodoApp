import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {todoApi} from "./features/todoApi";
import { setupListeners } from "@reduxjs/toolkit/query";


const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer, 
});

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(todoApi.middleware)
  
});

setupListeners(store.dispatch);

export default store;
