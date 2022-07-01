import {Routes,Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Erorr from './Nav/Erorr';
import ProductDetail from './ProductDeltails.js/ProductDetails';
import Login from './MyProfile/Login';
import ProtectOutLet from './Auth/ProtectOutLet';
const Router=()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Nav/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/*' element={<ProtectOutLet/>}>
                        <Route path='cart' element={<Cart/>}/>
                    </Route>
                    <Route path='/productDetail' element={<ProductDetail/>}/>
                </Route>
                    <Route path='/login' element={< Login/>}/>
                    <Route path='*' element={<Erorr/>}/>
                    
            </Routes>
        </>
    )
}
export default Router;