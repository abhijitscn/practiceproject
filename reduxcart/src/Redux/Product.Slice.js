import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getapi } from "../Pages/Api/ApiService";
export const STATUS=Object.freeze({
    IDLE:'Idle',
    LOADING:'loading',
    ERROR:'Error'
});

export const fetchData=createAsyncThunk('product/fetch', async()=>{
   let data= getapi().then((res)=>{
        return res.data.products;
    });
    console.log(data);
    return data;
})

const ProductSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.LOADING
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.status=STATUS.LOADING
            return state;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status=STATUS.IDLE;
            return state;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status=STATUS.ERROR;
            return state;
        })
    }

});



export default ProductSlice.reducer;