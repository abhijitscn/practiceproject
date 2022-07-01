import { useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';
import './ProductDetail.css';
import axios from 'axios';
const ProductDetail=()=>{
    const {state}=useLocation();
    const [data,setData]=useState({
        thumbnail:'',
        brand:'',
        title:'',
        description:'',
        price:0,
        discPrice:0,
        discountper:0
    });
    const [count,setCount]=useState(1);
    const[price,setPrice]=useState(0);

    const getProductDetails=()=>{
        axios.get(`https://dummyjson.com/products/${state}`)
        .then((res)=>{
            console.log(res.data);
            let d=(res.data.price-(res.data.price*(res.data.discountPercentage/100))).toFixed(2);
            setData({
                thumbnail: res.data.thumbnail,
                title:res.data.title,
                brand:res.data.brand,
                price:res.data.price,
                description:res.data.description,
                discPrice:d,
                discountper:res.data.discountPercentage,
                counts:count
            });
            setPrice(res.data.price);
        }).catch((err)=>{
            console.log(err);
        })
    };

    useEffect(()=>{
        getProductDetails();
    },[state]);

    useEffect(()=>{
        let p= (count*price).toFixed(2);
        let dp=((price-(price*(data.discountper/100)))*count).toFixed(2);
        setData({...data,price:p,discPrice:dp});
        console.log(p);
        console.log(count);
    },[count]);
    
    return(
        <>
        <div className='pwrapper'>
            <div className='psub'>
                <div className='picDiv'>
                    <img src={data.thumbnail} className='dImg' alt='productImage'/>
                    
                </div>
                <div className='detaildiv'>
                    <h3>{data.title} <span>({data.brand})</span></h3>
                    <p>{data.description}</p>
                    <div>
                        <button className='asbutt' onClick={()=>{if(count>1){setCount(count-1)}}}>-</button>
                        <span>{count}</span>
                        <button className='asbutt' onClick={()=>{setCount(count+1)}} >+</button>
                    </div>
                    <h4><span className='orgp'>Rs.{data.price}</span><span className='dprice'>Rs.{data.discPrice}</span> </h4>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductDetail;