# This is a login plugin about Vue

## 介绍
   这是一个在学习Vue的过程中做的一个登录插件，希望对你有用。

## 开始使用
```vue
/**
    * 在这里可以处理插件与实例之间的通信
    * @param container  String  挂载插件的接口类名称
    * @param withCookie Boolean 是否携带cookie
    * @param onLogin    function  登录成功后返回的数据
    * @param onLogout   function  注销登录后返回的数据 （默认没有返回值）
    * @param onLoginError  function  登录失败后返回的数据 （如：网络失败，账号密码失败）
    * */

 this.$createMyInstance({
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
```
### 触发事件监听函数,组件内部自定义事件函数
```html
 /**
     * function on_Login  @param {on-login}   eg:$on('on-login')
     * function on_Logout @param {on-login-error} eg:$on('on-login-error')
     * function on_LoginError @param {on-log-out} eg:$on('on-log-out')
     *
     * 监听插件内部事件
     * 根据参数添加额外的逻辑
     * */
    this.loginInstance.$on('login-event',userData=>{
        console.log("login success!",userData)
    })
```
## 文档
## 提问
## 变更记录
## 联系方式
## 共享代码



#### 作者：HLR

