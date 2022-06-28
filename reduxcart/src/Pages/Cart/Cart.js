import './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Cart.Slice';
const Cart=()=>{
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.cart);

    const removeItems=(pId)=>{
        dispatch(removeFromCart(pId));
    };
    return(
        <>
        <div className='mainCart'>
            <h2 className='heading'>My Cart</h2>
            {products.length!==0?
            <>
            {products.map((d)=>(
            <div className='cartCard' key={d.id}>
                <img src={d.thumbnail} style={{maxHeight:'100px',maxWidth:'120px'}} alt='Product-image'/>
                <h4>{d.title}</h4>
                <h5>Rs. {d.price}</h5>
                <button className='cartButton' onClick={()=>{removeItems(d.id)}}>Remove</button>
            </div>
            ))}
            </>
            :
            <h3>No product added to cart !!</h3>
            }
        </div>

        </>
    )
}
export default Cart;