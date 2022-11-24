import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
// 引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 为了使用proxy.$abc,针对vue2迁移vue3
//实际上就是让this.xxx能够使用
const app = createApp(App);
app.config.globalProperties.$abc = '123';
declare module '@vue/runtime-core'{
    interface ComponentCustomProperties{
        $abc:any
    }
}
app.use(createPinia());
app.use(ElementPlus)
app.use(router).mount('#app')

