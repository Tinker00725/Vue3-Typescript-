import {request} from './request'
import {IUser} from '@/models/User'
import {IResData,ILoginData} from '@/models/ResponseData'
import {AxiosPromise} from 'axios'
// 登录__AxiosPromise的泛型就是<>内的限制
export const doLogin = (user:IUser):AxiosPromise<IResData<ILoginData>>=>{
    return request({
        url:"/user/login",
        method:'post',
        data:user
    })
}