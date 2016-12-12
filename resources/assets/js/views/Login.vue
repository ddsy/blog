<template>
    <div class="main">
        <div id="particles-js"></div>
        <el-row class="content">
            <div class="login-form">
                <div class="title"><i class="iconfont icon-people"></i>用户登录</div>
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
    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .main {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        background: #fff;
    }

    .content {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .login-form {
        width: 500px;
        position: relative;
        margin: 10px auto;
        border: 1px solid #9c9c9c;
        box-shadow: 0 0 10px #9c9c9c;
        padding: 20px;
        background: #e9f2e3;
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
    import '../particles.min'
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
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    username: [
                        {validator: checkName, trigger: 'blur'}
                    ]
                }
            };
        },
        mounted() {
            particlesJS('particles-js',
                {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#000"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#000",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover"
                    }
                }
            );
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

                this.$router.push('/console');
            }
        }
    }
</script>