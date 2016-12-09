<template>
    <div>
        <el-row>
            <div class="login-form">
                <div class="title">用户登录</div>
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSubmit2">登录</el-button>
                        <el-button @click="handleReset2">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-row>
        <my-footer></my-footer>
    </div>
</template>
<style lang="sass" scoped>
    .login-form {
        width: 500px;
        position: relative;
        margin: 10px auto;
        border: 1px solid #9c9c9c;
        box-shadow: 0 0 10px #9c9c9c;
        padding: 20px;
    }
    .title {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }
    .el-button {
        width: 48%;
    }
</style>
<script>
    import Footer from '../components/Footer.vue'
    export default {
        components: {
            'my-footer': Footer
        },
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
            };
            return {
                ruleForm2: {
                    password: '',
                    checkPass: '',
                    username: ''
                },
                rules2: {
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    username: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        console.log('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

                this.$router.push('/admin');
            }
        }
    }
</script>