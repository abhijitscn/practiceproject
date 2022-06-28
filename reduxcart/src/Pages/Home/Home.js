import './Home.css';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addtocart } from '../../Redux/Cart.Slice';
import { fetchData } from '../../Redux/Product.Slice';
import { STATUS } from '../../Redux/Product.Slice';
import {useNavigate} from 'react-router-dom';
import { getAPiwithInter } from '../Api/ApiService';
const Home=()=>{
    // const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.product);
    const cartData=useSelector((state)=>state.cart);
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(fetchData());
        getProduct();
        
    },[]);
    
   
    const getProduct=()=>{
        getAPiwithInter().then((res)=>{
            console.log(res);
        })
       
    };
    
    const addToCart=(product)=>{
        // console.log(cartData);
        if(cartData.length>0){
            let check=cartData.some((el)=>{
               return el.id===product.id
            });
            console.log(check);
            if(check){
                console.log('false');
            }
            else if(!check){
                dispatch(addtocart(product));
                console.log('new'); 
            }
        }
        else{
            dispatch(addtocart(product));
            console.log('empty cart');
        }
        
        // console.log(product);
    };

    const goToDetailsPage=(id)=>{
        navigate('/productDetail',{state:id});
    }
    return(
        <>
            <div className="main">
                {
                (product.status===STATUS.LOADING)?
                    <h1>Loading....</h1>
                    :
                (product.status===STATUS.ERROR)?
                    <h1>Something Went wrong!!!!</h1>
                    :
                <>
                {product.data.map((d)=>(
                <div className='card' key={d.id}>
                    <img src={d.thumbnail} style={{maxHeight:'100px',maxWidth:'120px'}} alt='product'/>
                    <p>{d.title}</p>
                    <p className='cat'>Rs. {d.price}</p>
                    <div>
                        <button className='detbut' onClick={()=>{goToDetailsPage(d.id)}}>View Details</button>
                        <button onClick={()=>addToCart(d)}> Add to cart</button>
                    </div>
                    
                </div>
                ))}
                </>
                } 
               
                
            </div>
        </>
    )
};

export default Home;