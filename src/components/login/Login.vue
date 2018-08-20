<template>
  <div id="login">
    <bubbles-effect :options="options" style="my_canvas"></bubbles-effect>
    <div class="top"></div>
    <div class="top_txt animated bounceInUp">欢迎使用学生信息管理系统</div>
    <div class="login_box">
      <div class="copu">
        <el-input placeholder="请输入用户名" v-model="name" autofocus class="animated bounceInLeft"></el-input>
        <el-input placeholder="请输入密码" type="password" v-model="pass" class="animated bounceInLeft"></el-input>
        <a class="login_btn animated bounceInLeft" @click="put_in">登录</a>
        <el-checkbox v-model="checked" class="animated tada">记住密码</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css/animate.min.css';
export default {
  data() {
    return {
      name: '', // 用户名
      pass: '', // 密码
      checked: false, // 记住密码
      // neon-effect => 这个把背景色换掉还是挺合适的
      // options: {
      //   len: 20, //The unilateral length of the pentagon
      //   count: 50, //How many lines overlap
      //   rate: 20, //rate the smaller fast
      //   dieChance: 0.05, //The chance to redraw a single painting failure.
      //   sparkChance: 0.1, //[0,1] The larger the figure, the larger the pentagon.
      //   sparkDist: 10, //Flash point distance.
      //   sparkSize: 2,//Flash point size.
      //   contentLight: 60, // [0,100] Brightness of color block
      //   shadowToTimePropMult: 6, //The shadow size of the inner ring of the pentagon.
      //   bgColorArr: [0, 0, 0] //Background color array
      // },
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
        self.$message.success("登录成功")
        self.$router.push({ path: '/' });
        localStorage.setItem("user_name",self.name);
      } else {
        // console.log('no input')
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
</style>
