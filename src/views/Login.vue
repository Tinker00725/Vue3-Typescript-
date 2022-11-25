<template>
  <div class="container">
    <el-card class="box-card">
      <div style="margin: 20px" />
      <el-form
        ref="formRef"
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
        :rules="rules"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="formLabelAlign.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formLabelAlign.password" />
        </el-form-item>
    <el-form-item id="btnContainer">
      <el-button type="primary" @click="onSubmit(formRef)" id="login">登录</el-button>
    </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useUser } from "@/store/user";
import { onMounted, reactive, ref } from 'vue'
import type { FormRules,FormInstance } from 'element-plus'
import { useRouter } from "vue-router";
const store = useUser();
const router = useRouter();
const labelPosition = ref('right')

const formLabelAlign = reactive({
  account: '',
  password: '',
})

const formRef = ref();//通过与组件中ref同名的方式获取到了this.$refs.formRef
onMounted(()=>{
    console.log(formRef.value)
})
const onSubmit = (form1:FormInstance) => {
  form1.validate(vaild=>{
    if(vaild){
        // console.log('验证成功')
      router.push('/upload')
      }else{
        console.log('验证失败')
    }
  })
}
const rules = reactive<FormRules>({
    account:[
    { required: true, message: '请输入有效的用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名的长度在3~10个字符串之间', trigger: 'blur' },
    ],
    password:[
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度在6-16个字符之间', trigger: 'blur' },
    ]
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 50vw;
  background-image: url("@/assets/img/星空图.jpg");
  background-size: cover;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
  position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#login{
    width: 120px;
    margin: auto;
    transform: translateX(-50%);
}
</style>
