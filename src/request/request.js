import axios from './index'
export function carousel(){
    return axios({
        url:'/carousel',
        method:'get'
    })
}
//首页文章列表
export function homelist(){
    return axios({
        url:'/home',
        method:'get'
    })
}
