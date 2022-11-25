import axios from 'axios'
export const request = axios.create({
    baseURL:'/api',
    timeout:3000,
});

request.interceptors.request.use((config)=>{
    const token = window.sessionStorage.getItem('TOKEN');
    if(token){
        (config.headers as any).token = token;
    }
    return config
})

request.interceptors.response.use((response)=>{
    const token = response.data.data.token
    if(token){
        window.sessionStorage.setItem('TOKEN',token)
    }
    return response
})