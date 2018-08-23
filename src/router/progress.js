import router from "./index.js"
import Vue from "vue"
import NProgress from "nprogress"//轻量级的进度条组件
import "nprogress/nprogress.css"

//调整动画设置和速度 
NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: true });

const whiteList = ["/login"] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) { //如果是登录页面路径,就直接next()
    // console.log('login')
    next();
  } else {
    let user_name = localStorage.getItem("user_name");
    // console.log(user_name,'user_name')
    if(user_name != null) {
      // console.log('user_name')
      next();
    } else {
      // console.log('no user_name')
      next("/login")
      NProgress.done()
    }
  }  
})

router.afterEach(() => {
  // console.log('afterEach')
  NProgress.done()
})
