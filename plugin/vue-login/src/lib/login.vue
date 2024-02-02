<!--
 * @Description:login
 * @Author: hlr
 * @Date:2024-01-30 15:36
 * @LastEditors: hlr
 * @LastEditTime: 2024-01-30 15:36
-->

<template>
    <div class="login-container">
        <div class="wrapper" id="app">
            <div class="login-form">
                <div class="login-list">
                    <div class="login-item">
                        <div class="login-item__side -front">
                            <div class="login-item__focus"  ref="focusElement"></div>
                            <div class="login-item__cover">
<!--                                <img v-bind:src="'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' + currentLoginBackground + '.jpeg'" class="login-item__bg">-->
                            </div>

                            <div class="login-item__wrapper">
                                <div class="login-item__top">
                                        <div style="font-size: 2rem;font-weight:bolder;color: white;text-align: center">欢迎登录</div>
                                </div>
                                <div class="login-item__content">
                                    <div class="login-item__date" ref="loginDate">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="login-form__inner">
                    <div class="login-input">
                        <label for="loginNumber" class="login-input__label">登录账号</label>
                        <input type="text" id="loginNumber" class="login-input__input"
                               v-model="username"
                               v-on:focus="focusInput"
                               v-on:blur="blurInput"
                               data-ref="loginNumber"
                               autocomplete="off">
                    </div>
                    <div class="login-input">
                        <label for="loginName" class="login-input__label">登录密码</label>
                        <input
                               id="loginName"
                               type="password"
                               class="login-input__input"
                               v-model="password"
                               v-on:focus="focusInput"
                               v-on:blur="blurInput"
                               data-ref="loginName"
                               autocomplete="off">
                    </div>
                    <button class="login-form__button" @click="myLogin">
                        登录
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                username: '',
                password: '',
                currentLoginBackground: Math.floor(Math.random()* 25 + 1), // just for fun :D
            }
        },
        methods: {
            focusInput (e) {
                //定焦
                console.log(e.target.value)
            },
            blurInput(e) {
                //失焦
                let vm = this;
                setTimeout(() => {
                    if (!vm.isInputFocused) {
                        vm.focusElementStyle = null;
                    }
                }, 300);
                vm.isInputFocused = false;
                console.log(e.target.value)
            },
            myLogin(){
              console.log('登录成功')
                const {onLogin,onLogout,onLoginError,withCookie}=this.$parent
                // 这里可以添加登录逻辑，例如向服务器发送登录请求
                // 成功后可以发出登录成功的事件或执行其他操作
                /**
                 * 添加登录中的逻辑
                 * */



                /**
                 * 登录成功
                 * */
                onLogin({username: this.username,password: this.password})
                /**
                 * 注销登录
                 * */
                onLogout('注销登录成功')
                /**
                 * 登录失败
                 * */
                onLoginError({username: this.username,password: this.password})
                /**
                 * 事件监听
                 * */
            },
            on_Login(){
                /**
                 * 事件监听登录成功
                 * */
                this.$parent.$emit('on-login', {username: this.username,password: this.password});
            },
            on_LoginError(){
                /**
                 * 事件监听登录失败
                 * */
                this.$parent.$emit('on-login-error', {message:'login fail'});
            },
            on_Logout(){
                /**
                 * 事件监听注销登录
                 * */
                this.$parent.$emit('on-log-out', {message:'login log out'});
            },

        },
    }
</script>

<style lang="scss" scoped>
.login-container{
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    //background-image: linear-gradient( 109.6deg,  rgba(25,170,209,1) 11.3%, rgba(21,65,249,1) 69.9% );
    /*    =========================  */
    * {
        box-sizing: border-box;
        &:focus {
            outline: none;
        }
    }
    .wrapper {
        min-height: 100vh;
        display: flex;
        padding: 50px 15px;
        @media screen and (max-width: 700px), (max-height: 500px) {
            flex-wrap: wrap;
            flex-direction: column;
        }
    }

    .login-form {
        max-width: 570px;
        margin: auto;
        width: 100%;
        @media screen and (max-width: 576px) {
            margin: 0 auto;
        }
        &__inner {
            background: #fff;
            // box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
            box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
            border-radius: 10px;
            padding: 35px;
            padding-top: 180px;
            min-width: 540px;
            @media screen and (max-width: 480px) {
                padding: 25px;
                padding-top: 165px;
                min-width: 300px;
            }
            @media screen and (max-width: 360px) {
                padding: 15px;
                padding-top: 165px;
                min-width: 200px;
            }
        }
        &__button {
            width: 100%;
            height: 55px;
            background: #2364d2;
            border: none;
            border-radius: 5px;
            font-size: 22px;
            font-weight: 500;
            font-family: "Source Sans Pro", sans-serif;
            box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
            color: #fff;
            margin-top: 20px;
            cursor: pointer;

            @media screen and (max-width: 480px) {
                margin-top: 10px;
            }
        }
    }

    .login-item {
        max-width: 430px;
        height: 270px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 2;
        width: 100%;

        @media screen and (max-width: 480px) {
            max-width: 310px;
            height: 220px;
            width: 90%;
        }

        @media screen and (max-width: 360px) {
            height: 180px;
        }

        &.-active {
            .login-item__side {
                &.-front {
                    transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
                    rotateZ(0deg);
                }
            }
        }

        &__focus {
            position: absolute;
            z-index: 3;
            border-radius: 5px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
            opacity: 0;
            pointer-events: none;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.65);

            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background: rgb(8, 20, 47);
                height: 100%;
                border-radius: 5px;
                filter: blur(25px);
                opacity: 0.5;
            }

            &.-active {
                opacity: 1;
            }
        }

        &__side {
            border-radius: 15px;
            overflow: hidden;
            // box-shadow: 3px 13px 30px 0px rgba(11, 19, 41, 0.5);
            box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
            transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
            transform-style: preserve-3d;
            transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
            backface-visibility: hidden;
            height: 100%;
        }
        &__bg {
            max-width: 100%;
            display: block;
            max-height: 100%;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        &__cover {
            height: 100%;
            background-color: #1c1d27;
            position: absolute;
            height: 100%;
            background-color: #1c1d27;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(6, 2, 29, 0.45);
            }
        }
        &__top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 40px;
            padding: 0 10px;
            width: 400px;

            @media screen and (max-width: 480px) {
                margin-bottom: 25px;
            }
            @media screen and (max-width: 360px) {
                margin-bottom: 15px;
            }
        }
        &__wrapper {
            font-family: "Source Code Pro", monospace;
            padding: 25px 15px;
            position: relative;
            z-index: 4;
            height: 100%;
            text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
            user-select: none;
            @media screen and (max-width: 480px) {
                padding: 20px 10px;
            }
        }
        &__content {
            color: #fff;
            display: flex;
            align-items: flex-start;
        }
        &__date {
            flex-wrap: wrap;
            font-size: 18px;
            margin-left: auto;
            padding: 10px;
            display: inline-flex;
            width: 80px;
            white-space: nowrap;
            flex-shrink: 0;
            cursor: pointer;

            @media screen and (max-width: 480px) {
                font-size: 16px;
            }
        }
    }
    .login-list {
        margin-bottom: -130px;

        @media screen and (max-width: 480px) {
            margin-bottom: -120px;
        }
    }

    .login-input {
        margin-bottom: 20px;
        &__label {
            font-size: 14px;
            margin-bottom: 5px;
            font-weight: 500;
            color: #1a3b5d;
            width: 100%;
            display: block;
            user-select: none;
        }
        &__input {
            width: 100%;
            height: 50px;
            border-radius: 5px;
            box-shadow: none;
            border: 1px solid #ced6e0;
            transition: all 0.3s ease-in-out;
            font-size: 18px;
            padding: 5px 15px;
            background: none;
            color: #1a3b5d;
            font-family: "Source Sans Pro", sans-serif;

            &:hover,
            &:focus {
                border-color: #3d9cff;
            }

            &:focus {
                box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
            }
            &.-select {
                -webkit-appearance: none;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC');
                background-size: 12px;
                background-position: 90% center;
                background-repeat: no-repeat;
                padding-right: 30px;
            }
        }
    }

}
</style>
