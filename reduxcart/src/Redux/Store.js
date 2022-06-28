import { configureStore } from '@reduxjs/toolkit';

import CartSlice from "./Cart.Slice";
import ProductSlice from './Product.Slice';

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        product:ProductSlice
    }
});

export default Store;