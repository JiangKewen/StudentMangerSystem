<template>
  <div id="login">
    <bubbles-effect :options="options" style="my_canvas"></bubbles-effect>
    <div class="top"></div>
    <div class="top_txt animated bounceInUp">Welcome Login</div>
    <div class="login_box">
      <div class="copu">
        <el-input placeholder="请输入用户名" v-model="name" autofocus class="animated bounceInLeft"></el-input>
        <el-input placeholder="请输入密码" type="password" v-model="pass" class="animated bounceInLeft"></el-input>
        <a class="login_btn animated bounceInLeft" @click="put_in">登录</a>
        <el-checkbox v-model="checked" class="animated tada">记住密码</el-checkbox>
      </div>
    </div>
    <div class="settings"><el-button type="text" icon="el-icon-setting"></el-button></div>
  </div>
</template>

<script>
import 'animate.css/animate.min.css';
import { login } from "../../api/api.js"
export default {
  data() {
    return {
      name: '', // 用户名
      pass: '', // 密码
      checked: false, // 记住密码
      options: {
        color: '#2a2a7591', //Bubble color
        radius: 15, //Bubble radius
        densety: 0.3, // The larger the bubble density, the greater the density (suggest no more than 1).
        clearOffset: 0.2 // The larger the bubble disappears [0-1], the longer it disappears.
      }
    }
  },
  methods: {
    put_in() {
      // 先做前端验证，再做后台验证，最后路由跳转
      let self = this;
      if(self.name && self.pass) {
        console.log(login,'type')
        login({
          "username": self.name,
          "password": self.pass
        }).then(res => {
          console.log(res, "res");
          if(res.state == 2) {
            localStorage.setItem("user_name",self.name);
            self.$router.push({ path: '/' });
            self.$message.success(res.msg)
          } else {
            self.$message.error(res.msg)
          }
        }).catch(err => {
          console.log(err, "err");
        });
      } else {
        self.$message.error("请输入用户名及密码！");
      }
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
/*@import 'animate.css';*//*考虑动画会比较有意思，在main.js引入*/
/*引入背景图片*/
#login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/wallhaven-226776.jpg");
  background-size: cover;
  background-position: center center;
}
/*顶部模糊层以及文字部分*/
.top, .top_txt {
  width: 100vw;
  height: 6vh;
  transform: scale(1.2);
  position: fixed;
  top: 0;
  left: 0;
}
/*长方形模糊层*/
.top::after {
  width: 100%;
  height: 100%;
  left: 0;
  top: -100%;
  content: '';
  display: inline-block;
  position: relative;
  background: #2a2a7591;
}
/*梯形模糊层*/
.top::before {
  width: 30vw;
  height: 4vh;
  content: '';
  display: inline-block;
  position: relative;
  top:78%;
  left: 35vw;
  background: #2a2a7591;
  transform: perspective(.5em) rotateX(-1deg);
  transform-origin: bottom;
}
/*文字样式*/
.top_txt {
  text-align: center;
  line-height: 10vh;
  color: #2ad2e4;
  font-size: 38px;
  transition: all 0.5s;
  text-shadow: 0 0 5px #3735d6;
  background: transparent;
  display: inline-block;
}
.top_txt:hover {
  text-shadow: 0 0 20px #3735d6;
}
/*登录box*/
.login_box {
  width: 320px;
  height: 325px;
  position: relative;
  left: calc(50vw - 160px);
  top: 30vh;
}
.login_box::before {
  background: #2a2a7591;
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  display: inline-block;
  filter: blur(20px);
}
/*登录box的里面一层*/
.copu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  /*overflow: hidden;*/
}
/*登录按钮*/
.login_btn {
  display: block;
  width: 100%;
  text-align: center;
  background: #ea15157a;
  height: 40px;
  line-height: 40px;
  border-radius: 6px;
  color: white;
  z-index: 9999;
  cursor: pointer;
}
/*canvas*/
.my_canvas {
  z-index: -1;
}
</style>
<style>
#login .el-input .el-input__inner {
  background-color: #8790d047;
  border: 0;
  color: #82ffa4;
}
#login .el-checkbox {
  color: white;
}
.settings{
    color: white;
    position: fixed;
    top: 70px;
    right: 60px;
}
.el-button i {
  font-size: 25px;
}
</style>
