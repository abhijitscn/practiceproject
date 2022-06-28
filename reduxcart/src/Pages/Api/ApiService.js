import axiosInstance from "./ApiInterface";
import demoInter from "./demoApiInter";

export function getapi(){
    return axiosInstance.get('/products');
};

export function getAPiwithInter(){
    return demoInter.get('/products');
}