import { defineStore } from "pinia";

export const useUser = defineStore('user',{
    state:()=>{
        return {
            menus:[],
            isLogin:false,
        }
    },
    actions:{
        login(){
            this.isLogin = true;
        },
        logout(){
            this.isLogin = false;
        },
        setMenus(menus:any[]){
            (this.menus as any[]) = menus
        }
    }
})