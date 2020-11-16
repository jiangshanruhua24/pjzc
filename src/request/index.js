<<<<<<< HEAD
// import axios from 'axios';
// export default function(config){
//     //instance就是实例化的axios对象
//     const instance =axios.create({
//         baseURL:'/api',

//     });
//     //拦截请求
//     instance.interceptors.request.use(function(config){
//         //config.headers[]
//         if(config.url!='/login'||config.url!='/register'){
//             config.headers['token']=sessionStorage.getItem('token');
//         }
//         console.log(config);
//         return config;
//     },function(error){
//         return Promise.reject(error);
//     });


//     //拦截响应
//     instance.interceptors.response.use(function(response){
//         return response.data;
//     },function(error){
//         return Promise.reject(error);
//     })
//     return instance(config);
// }
=======
import axios from 'axios';
export default function(config){
    //instance就是实例化的axios对象
    const instance =axios.create({
        baseURL:'/api',

    });
    //拦截请求
    instance.interceptors.request.use(function(config){
        //config.headers[]
        if(config.url!='/login'||config.url!='/register'){
            config.headers['token']=sessionStorage.getItem('token');
        }
        console.log(config);
        return config;
    },function(error){
        return Promise.reject(error);
    });


    //拦截响应
    instance.interceptors.response.use(function(response){
        return response.data;
    },function(error){
        return Promise.reject(error);
    })
    return instance(config);
}
>>>>>>> 8f059e79b4b60a3418e7213635cf88e433a6cc52
