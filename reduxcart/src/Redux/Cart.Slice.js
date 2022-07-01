import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart(state,action){
             state.push(action.payload);
             return state;
        },
        removeFromCart(state,action){
           return state.filter((res)=>{
                return res.id!==action.payload
            });
        }
    }
});

export const {addtocart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;