/**
 * @Description:app
 * @Author: hlr
 * @Date:2023-01-17 16:04
 * @LastEditors: hlr
 * @LastEditTime: 2023-01-17 16:04
 */

import Vue from "vue"
import LoginPlugin from "./lib/index";
/**
 * 使用插件
 * 将插件挂载到实例上
 * */
Vue.use(LoginPlugin)
new Vue({
  el: "#app",
  data:{
    loading1:false,
    message:'',
    isPlayer:false,
    loginInstance:null
  },
  created(){
    this.clickLogin()
  },
  methods:{
    clickLogin(){
      /**
       * 在这里可以处理插件与实例之间的通信
       * @param container  String  挂载插件的接口类名称
       * @param withCookie Boolean 是否携带cookie
       * @param onLogin    function  登录成功后返回的数据
       * @param onLogout   function  注销登录后返回的数据 （默认没有返回值）
       * @param onLoginError  function  登录失败后返回的数据 （如：网络失败，账号密码失败）
       * */
      this.loginInstance=this.$createMyInstance({
        container:'.login-box',
        withCookie: true,
        onLogin:(preload)=>{
          console.log('--------AUTH_EVENT_LOGIN--------', preload,this);

        },
        onLogout:(preload)=>{
          console.log('--------AUTH_EVENT_LOGOUT--------',preload,this);

        },
        onLoginError:(preload)=>{
          console.log('--------AUTH_EVENT_LOGIN_ERROR--------',preload, this);
        },
      })
      /**
       * 监听插件内部事件
       * 根据参数添加额外的逻辑
       * */
      this.loginInstance.$on('login-event',userData=>{
        console.log("login success!",userData)
      })
    },
    pluginLogin(e){
      /**
       * 插件注册时自定义事件
       * 访问插件内部的函数
       * 获取内部数据
       * 添加额外的逻辑
       * */
      const onLogin=this.loginInstance.Login()
      /**
       * 插件内部返回的数据
       * */
      console.log(onLogin)
    }
  }
})


