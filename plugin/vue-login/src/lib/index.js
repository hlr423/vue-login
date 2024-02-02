/*
 * @Description:LoginPlugin
 * @Author: hlr
 * @Date:2024-01-30 15:47
 * @LastEditors: hlr
 * @LastEditTime: 2024-01-30 15:47
*/
import Login from './login.vue';

const LoginPlugin = {
    install(Vue, options) {
        // 注册全局组件
        Vue.component('Login', Login);

        // 添加全局方法或属性
        Vue.prototype.$createMyInstance = function(data) {
            console.log(data)
            const {onLogin,onLogout,onLoginError,withCookie}=data
            this.prototype= {...data}
            // 创建登录组件实例并挂载到新的元素上
            const loginInstance = new Vue({
                data:data,
                render: h => h(Login),
                methods:{
                    Login(data) {
                        onLogin('====onLogin===')
                        /**
                         * 触发事件监听函数,组件内部自定义事件函数
                         * function on_Login  @param {on-login}   eg:$on('on-login')
                         * function on_Logout @param {on-login-error} eg:$on('on-login-error')
                         * function on_LoginError @param {on-log-out} eg:$on('on-log-out')
                         * */
                        const {username,password,myLogin,on_Login,on_LoginError,on_Logout} =this.$children[0]
                        /**
                         * 这里可以写登录事件的内部逻辑*/

                        return false
                    },
                    Logout(data) {
                        onLogout('=====onLogout=====')

                        return false
                    },
                    LoginError(data) {
                        onLoginError('=====onLoginError=====')
                        return false
                    },
                },
            });
            const loginElement = document.querySelector(data.container);
            document.body.appendChild(loginElement);
            //挂载到指定到dom元素上
            loginInstance.$mount(loginElement);
            // 返回登录组件实例，可以在外部通过该实例调用登录组件的方法
            return loginInstance;
        };
    }
};

export default LoginPlugin;
