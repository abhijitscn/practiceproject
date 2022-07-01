import { Link,Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import './Nav.css';
const Nav=()=>{
    const product=useSelector((state)=>state.cart);
    const[authtog,setAuthLog]=useState(false);
    useEffect(()=>{
        let auth=sessionStorage.getItem('auth');
        setAuthLog(auth);
    },[])
    
    const logOut=()=>{
        sessionStorage.removeItem('auth');
        setAuthLog(false);
    }
    return(
        <>
            <div className="mainNav">
                <div className="subNav">
                    <p>My application</p>
                    <Link to='/' className="margin20 navlink">Home</Link>
                    <Link to='/cart' className="margin20 navlink">Cart</Link>
                </div>
                <div className="subNav margin20">
                    {authtog?<p className="plink" onClick={logOut}>Log-Out</p>:
                    <Link to='/login' className="margin20 navlink" >Login</Link>}
                    <p className="plink">Cart:{product.length}</p>
                </div>  
            </div>
            <Outlet/>
        </>
    )
};

export default Nav;