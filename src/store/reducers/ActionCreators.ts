import {createAsyncThunk} from "@reduxjs/toolkit";
import {Instance} from "../Instance";
import {IUser} from "../modules/IUser";
import axios from "axios";

export const fetchList = createAsyncThunk(
    'list/fetchAll',
    async(_, thunkAPI)=>{
        try{
            const response = await  Instance.get('lists');
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
        }
    }
)
export const fetchOneMovies  =  createAsyncThunk(
    'find/movies',
    async (id: string , thunkAPI)=> {
        try {
            const response = await Instance.get('/movies/find/' + id);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
export const userRegister  =  createAsyncThunk(
    'user/register',
    async (data:IUser, thunkAPI)=> {

        try {
            const response = await axios.post('http://localhost:8800/api/auth/register' , data);
            console.log(response.data)
              return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)
export const userLogin  =  createAsyncThunk(
    'user/login',
    async (data:IUser, thunkAPI)=> {

        try {
            const response = await axios.post('http://localhost:8800/api/auth/login' , data);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)