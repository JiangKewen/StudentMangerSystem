<template>
  <div id="index">
    <el-row :gutter="6" class="top_box">
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="primary" icon="el-icon-news"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>新消息</span>
          </a>
        </el-button-group>
      </el-col>
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="success" icon="el-icon-circle-plus-outline"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>新增人数</span>
          </a>
        </el-button-group>
      </el-col>
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="info" icon="el-icon-goods"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>学生总数</span>
          </a>
        </el-button-group>
      </el-col>
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="warning" icon="el-icon-picture"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>管理员总数</span>
          </a>
        </el-button-group>
      </el-col>
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="danger" icon="el-icon-document"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>待审核文章</span>
          </a>
        </el-button-group>
      </el-col>
      <el-col :sm="12" :md="8" :lg="4">
        <el-button-group class="ic_a">
          <el-button type="primary" icon="el-icon-tickets"></el-button>
          <a class="btn_txt">
            <span>10</span>
            <span>文章总数</span>
          </a>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.top_box {
  padding: 8px;
}
/*看起来像按钮的那个*/
.ic_a {
  height: 94px;
  width: 100%;
  display: inline-block;
  border-radius: 6px;
  margin-top: 4px;
  /*border: 1px solid tan;*/
  /*padding: 6px;*/
}
/*看起来像按钮的那个左边的部分*/
.ic_a > button {
  width: 40%;
  height: 100%;
}
/*看起来像按钮的那个右边的文字*/
.btn_txt {
  /*display: inline-block;*/
  width: 60%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  flex-flow: column;
  /*text-align: center;*/
  /*align-items: center;*/
  background: #f2f2f2;
}
.btn_txt > span {
  display: inline-block;
  width: 100%;
  text-align: center;
  user-select: none;
}
.btn_txt > span:nth-child(1) {
  font-weight: bolder;
}
</style>
<style>
/*看起来像按钮的那个左边的部分*/
.el-button i {
  font-size: 42px;
}
</style>