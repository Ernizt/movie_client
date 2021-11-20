import  {combineReducers, configureStore } from "@reduxjs/toolkit";
import rundomSlise from "./reducers/RundomListSlice";
import movieSlise from './reducers/FindMovieSlice'
import userRegisterReduser from "./reducers/CreateUser";

const rootReducer = combineReducers({
      rundomSlise,
      movieSlise,
    userRegisterReduser
});

export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
    })
}
export type RooState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];