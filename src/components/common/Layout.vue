<template>
  <div id="layout">
    <div class="top">
      <div class="top_left">
        <div class="main_tit" @click="$router.push('/')">首页信息后台管理</div>
        <el-input
          placeholder="请输入用户名"
          v-model="search"
          class="search"
          size="small"
          suffix-icon="el-icon-search"></el-input>
        <div class="wealth">
          <span>杭州</span>
          <span>33℃</span>
          <span>台风</span>
        </div>
      </div>
      <div class="top_right">
        <div class="info">系统公告</div>
        <div class="lock_screen">锁屏</div>
        <el-dropdown>
          <span class="el-dropdown-link">
            超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item  @click.native="quit">退出登录</el-dropdown-item><!-- click未触发,使用native -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="bodys">
      <div class="left">
        <el-menu
          background-color="#393d49"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true" v-for="(nav, index) in navs" :key="index">
            <template>
              <el-submenu :index="index.toString()" v-if="nav.spread">
                <template slot="title">
                  <i v-if="nav.icon" class="fa" :class="nav.icon"></i>
                  <span slot="title" class="nav-next">{{nav.title}}</span>
                </template>
                    <el-menu-item v-if="subNav.children && nav.children.length>0"
                                :index="subNav.href"
                                v-for="(subNav,subIndex) in nav.children"
                                :key="subIndex"
                                class="subNav_child">
                      <i v-if="subNav.icon" class="fa" :class="subNav.icon" ></i>
                      <span slot="title" class="subNav-next">{{subNav.title}}</span>
                    </el-menu-item>
              </el-submenu>
            </template>
        </el-menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { navs_tree } from "../../api/api.js"
export default {
  data() {
    return {
      search: '',
      // currentRoute: this.$router.history.current.fullPath,
      navs:[],
    }
    },
    created: function() {
      navs_tree({
        "pid":''
      }).then(res => {
        this.navs = res
      })
    },
  methods: {
    // router_change() {
    //   console.log(this.currentRoute,'route');
    //   this.currentRoute = this.$router.history.current.fullPath.split('?')[0];
    // }
    quit() {
      console.log('%cquit','color:red;');
      localStorage.removeItem("user_name");
      this.$router.replace('/login');
    }
  },
  watch: {
    // '$route': 'router_change'
  }
}
</script>

<style scoped lang="less">
#layout {
  width: 100vw;
  height: 100vh;
  .top {
    height: 60px;
    width: 100vw;
    background: #23262E;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    user-select: none;
    .top_left,.top_right {
      display: inline-block;
      height: 100%;
    }
  }
}
.top_left > div {
  display: inline-block;
  color: #fff;
  user-select: none;
  cursor: pointer;
}
/*学生信息后台管理*/
.main_tit {
  font-size: 20px;
  padding-left: 25px;
  padding-right: 25px;
}
/*搜索框*/
.search {
  width: 240px;
}
/*天气*/
.wealth {
  padding-left: 25px;
}
/*右上角部分*/
.top_right > div {
  display: inline-block;
  color: #fff;
  padding-right: 40px;
  cursor: pointer;
}
/*下面部分*/
.bodys {
  width: 100vw;
  height: calc(100% - 60px);
  overflow: hidden;
  position: relative;
  .left {
    width: 201px;
    height: 100%;
    background: #393D49;
    display: inline-block;
    position: relative;
    user-select: none;
  }
  .right {
    width: calc(100% - 200px);
    height: 100%;
    background: #fff;
    display: inline-block;
    position: absolute; /*这里有个问题，不知道为什么right被left撑下去了*/
    top: 0;
    right: 0;
    box-sizing: border-box;
  }
}
.fa{
  color:#fff;
  margin-right: 5px;
  margin-top: 2px;
}
</style>
