import axios from "axios";
import axiosInstance from "./ApiIntance";

export function getapi(){
    return axiosInstance.get('/products');
};

