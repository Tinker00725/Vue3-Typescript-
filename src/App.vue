<template>
  <Login></Login>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent,getCurrentInstance,ComponentPublicInstance } from 'vue';
import { doLogin } from '@/api'
import Login from '@/views/Login.vue'
export default defineComponent({
  components:{Login},
  setup(){//下面都是为了重构vue2项目为vue3，因为要用到this
    const instance = getCurrentInstance();//获取this
    const proxy = instance?.proxy as ComponentPublicInstance//获取this需要用到proxy代理,对外可见

    window.a = 1//声明文件之后可以使用window
    proxy.$abc//不报错，说明this.$abc可以用了

    async function test(){
      const res = await doLogin({account:'Tinker',password:'123'})
      res.data.data.token
    }
    
    return{
      test
    }
  }
})
</script>
<style lang="scss">
body,html{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
