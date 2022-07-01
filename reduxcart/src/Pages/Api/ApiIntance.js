import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://dummyjson.com'
});

axiosInstance.interceptors.request.use((config)=>{
    console.log(config);
    config.headers.name='abhijit data';
    return config;
});

axiosInstance.interceptors.response.use((res)=>{
    console.log(res);
    res.data.name='abhijit'
    return res;
})
export default axiosInstance;