import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../modules/IUser";

type RundomState = {
    user:IUser;
    isLoading:boolean;
    error:string;
    isAuth:boolean
}
const initialState:RundomState = {
    user:
        {
        _id:'',
        username:'',
        email:'',
        password:'',
        isAuth:false,
        }
    ,
    isAuth:false,
    isLoading:false,
    error:'',
}
export const userRegisterReduser = createSlice({
    name: 'user',
    initialState,
    reducers: {
            userFatchingSuccess(state, action: PayloadAction<IUser>) {
                state.isLoading = false;
                state.error = '';
                state.user = action.payload;
            },
        userLogoOut(state, action: PayloadAction<boolean>){
                state.user.isAuth = action.payload;
        }
    }

  /*  extraReducers: {
        [userRegister.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = true;
            state.error = '';
            state.user = action.payload;
            state.isLoading = false;
        },
        [userRegister.pending.type] : (state)=> {
            state.isLoading = true;
        },
        [userRegister.rejected.type] : (state, action: PayloadAction<string>)=> {
            state.isLoading = false;
            state.error = action.payload
        }
    }*/
})
export const {userFatchingSuccess, userLogoOut} = userRegisterReduser.actions
export  default  userRegisterReduser.reducer;