import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOneMovies} from "./ActionCreators";
import IMoviesFind from "../modules/IMoviesFind";

type RundomState = {
    movie:IMoviesFind;
    isLoading:boolean;
    error:string;
}
const initialState:RundomState = {
    movie:
        {_id:'',
    title:'',
    desc:'',
    img:'',
    imgTitle:'',
    trailer:'',
    video:'',
    year:'',
    limit:0,
    ganre:'',
    isSeries:false,
    createdAt:'',
    updatedAt:'',}
    ,
    isLoading:false,
    error:'',
    }
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},/*
            listFatching(state) {
                state.isLoading = true;
            },
            listFatchingSuccess(state, action: PayloadAction<IRandomList[]>) {
                state.isLoading = false;
                state.error = '';
                state.lists = action.payload;
            },
            listFetchingError(state, action: PayloadAction<string>) {
                state.isLoading = false;
                state.error = action.payload;
            }
        }*/
    extraReducers: {
        [fetchOneMovies.fulfilled.type]: (state, action: PayloadAction<IMoviesFind>) => {
            state.isLoading = true;
            state.error = '';
            state.movie = action.payload;
            state.isLoading = false;
        },
        [fetchOneMovies.pending.type] : (state)=> {
            state.isLoading = true;
        },
        [fetchOneMovies.rejected.type] : (state, action: PayloadAction<string>)=> {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})
export  default  movieSlice.reducer;