<template>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item prop="name" label="用户名">
            <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit('loginForm')">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped>

</style>
<script>
export default {
    data(){
        const checkName = (rule, value, callback) =>{
            if(!value){
                callback(new Error("姓名不能为空"))
            }else{
                callback()
            }
        }
        const checkPass = (rule, value, callback) => {
            if(!value){
                callback(new Error("密码不能为空"))
            }else{
                callback()
            }
        }
        return {
            loginForm:{
                name: '',
                password: ''
            },
            rules:{
                name:[
                    { required: true, validator: checkName, trigger: 'blur'}
                ],
                password:[
                    { required: true, validator: checkPass, trigger: 'blur'}
                ]
            }
        }
    },
    mounted(){
        if(sessionStorage.getItem('usename') && sessionStorage.getItem('usepwd')){
            this.loginForm.name = sessionStorage.getItem('usename');
            this.loginForm.password = sessionStorage.getItem('usepwd');
        }else{
            this.loginForm.name = '';
            this.loginForm.password = '';
        }
    },
    methods: {
        submit (form){
            let {name, password} = this.loginForm;
            this.$refs[form].validate((valid) => {
                if(valid){
                    if(name == 'admin' && password == '123'){
                        sessionStorage.setItem('usename',name);
                        sessionStorage.setItem('usepwd',password);
                        this.$router.push('/home')
                    }else{
                        console.log('用户密码错误')
                        // this.message('用户密码错误')
                    }
                }
            })
        }
    }
}
</script>