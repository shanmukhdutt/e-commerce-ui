import axios from 'axios'
import {setupCache} from 'axios-cache-adapter'
const cache=setupCache({
    maxAge:5000,
}) 
const instance=axios.create({
    baseURL:'https://fakestoreapi.com/',
    adapter:cache.adapter
});
instance.interceptors.request.use(
    (config)=>{
        const tokenTaken=localStorage.getItem('token');
        if(tokenTaken){
            config.headers['Authorization']='Bearer'+tokenTaken;
        }
        return config;
    }, 
    (error)=>{
        return Promise.reject(error);
    }
)
export default instance