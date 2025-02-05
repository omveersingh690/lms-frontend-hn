import {configurestore} from "@reduxjs/toolkit";
import authSlicerReducer from'./Slices/AuthSlice';
const store = configureStore({
    reducer:{
        auth:authSlicerReducer
    },
    devTools: true
});
export default store;