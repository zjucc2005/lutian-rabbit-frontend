<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const formRef = ref()
  const formData = reactive({
    username: 'admin',
    password: '123456'
  })
  const formRules = reactive({
    username: [
      { required: 'true', message: 'Please input username', trigger: 'blur' },
    ],
    password: [
      { required: 'true', message: 'Please input password', trigger: 'blur' },
      { min: 6, max: 16, message: 'Length should be 6 ~ 16', trigger: 'blur' },
    ]
  })

  const handleLogin = async() => {
    // console.log('ref', formRef)
    await formRef.value.validate((valid, err) => {
      if (valid) {
        console.log('>>> login', formData)
        router.push('/')
      } else {
        console.log('err', err)
      }
    })
  }
</script>

<template>
  <el-container>
    <el-main>
      <h1 style="margin-top: 120px; margin-bottom: 15px; color: #fff;">Login Form</h1>
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        size="large"
        label-position="top"
        style="width: 480px;">
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">Login</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="formRef.resetFields()">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<style scoped>
  .el-container {
    height: 100vh;
    background-color: #2d3a4b;
  }
  .el-main {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .el-form-item .el-button {
    width: 100%;
  }
</style>
