import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRandomList} from './../modules/IRandomList';
import {fetchList} from "./ActionCreators";

interface RundomState {
    lists:IRandomList[];
    isLoading:boolean;
    error:string;
    count:number
    }
    const initialState:RundomState = {
        lists:[],
        isLoading:false,
        error:'',
        count:0
    }
    export const rundomSlise = createSlice({
        name: 'list',
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
            [fetchList.fulfilled.type]: (state, action: PayloadAction<IRandomList[]>) => {
                state.isLoading = true;
                state.error = '';
                state.lists = action.payload;
                state.isLoading = false;
            },
            [fetchList.pending.type] : (state)=> {
                state.isLoading = true;
            },
            [fetchList.rejected.type] : (state, action: PayloadAction<string>)=> {
                state.isLoading = false;
                state.error = action.payload
            }
        }
    })
export  default  rundomSlise.reducer;