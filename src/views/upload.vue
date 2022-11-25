<template>
    <el-row align="middle">
        <el-col :span="5" :push="5">
            <h3>文件上传页面</h3>
        </el-col>
        <el-col :span="5" :push="10" >
            <el-input v-model="input" placeholder="请输入内容" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="5" :push="5">
            <el-button type="primary" plain>上传文件</el-button>
        </el-col>
        <el-col :span="5" :push="13">
            <el-button type="danger" plain><el-icon><Delete /></el-icon></el-button>
        </el-col>
    </el-row>
    <hr>
    <el-row align="middle">
        <el-col :span="5" :push="5">文件</el-col>
        <el-col :span="5" :push="13"><el-button :icon="Sort" circle /></el-col>
    </el-row>
    <el-row justify="center">
    <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
    </el-row>
</template>

<script lang="ts" setup>
import {Delete,Sort} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
const input = ref('')

</script>