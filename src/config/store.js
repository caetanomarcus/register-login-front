import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../dataflow/reducer/index";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../dataflow/api";


const store = configureStore({
    reducer: {
        // [authApi.reducerPath]: authApi.reducer,
        user: userReducer,

    },
});

setupListeners(store.dispatch);

export const RootStore = store.getState;

export default store;