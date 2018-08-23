# management

> Student management system

## 完成学生管理系统的前端搭建
---
### 2018年8月17日18:10:43
    引入：
    animate.css:        ^3.7.0   -->  一个css动画库
    element-ui:         ^2.4.6   -->  UI组件
    less:               ^3.8.1   -->  随便引入一个
    nprogress:          ^0.2.0   -->  一个进度条
    vue-canvas-effect:  ^0.0.12  -->  一个含有两个canvas动画的js库

    问题：
    element组件导航点击跳转问题，
    打包自动生成版本号，
    业务尚不明确，
---
### 2018年8月21日10:40:01
    引入：
    axios:              ^0.18.0  -->  一个基于promise的HTTP库

    解决：
    学习在config下dev.env.js和prod.env.js中添加变量 process.env.XXX，
    学习在config下index.js中添加proxyTable代理
---
### 2018年8月23日15:16:44
    添加404页面，
    后台已经能将打包完的页面正确显示
