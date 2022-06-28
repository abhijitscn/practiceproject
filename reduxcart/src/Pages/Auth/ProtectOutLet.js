import {Outlet,Navigate} from 'react-router-dom'
import useAuth from './useAuth';

const  ProtectOutLet=()=>{
    const auth=useAuth();
    return auth? <Outlet/>:<Navigate to='/'/>
};

export default ProtectOutLet;