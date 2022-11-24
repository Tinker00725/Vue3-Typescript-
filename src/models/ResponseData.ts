//这里是接收到的参数接口
// 接收
export interface IResData<T>{
    code?:string | number,
    data:T
}

export interface ILoginData{
    token:string;
}
