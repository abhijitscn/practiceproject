import axios from "axios";

const demoInter= axios.create({
    baseURL:'https://dummyjson.com/'
});

demoInter.interceptors.request.use((response)=>{
    console.log(response);
})
export default demoInter;