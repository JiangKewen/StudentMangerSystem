<template>
  <div id="kecheng">
    <div class="search_mode">
      <el-input v-model="search_key" placeholder="请输入关键字" class="search_in"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="info">添加课程</el-button>
      <el-button type="success">批量删除</el-button>
    </div>
    <el-table
      :data="modeData"
      style="width: 100%"
      border
      stripe>
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="code"
        label="课程编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名称">
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="任课教师">
      </el-table-column>
      <el-table-column
        prop="credit"
        label="课程学分">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="创建时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "KeCheng",
  data() {
    return {
      search_key: '',
      modeData: [
        {
          name: '王小虎',
          code: "/system/actions/11",
          teacher: "毕老师",
          credit: "4",
          create_time: '2016-05-02',
        }, {
          name: '王小虎',
          code: "/system/actions/11",
          teacher: "毕老师",
          credit: "4",
          create_time: '2016-05-02',
        }, {
          name: '王小虎',
          code: "/system/actions/11",
          teacher: "毕老师",
          credit: "4",
          create_time: '2016-05-02',
        }, {
          name: '王小虎',
          code: "/system/actions/11",
          teacher: "毕老师",
          credit: "4",
          create_time: '2016-05-02',
        }
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
#kecheng {
  padding: 10px 20px;
  /*overflow: hidden;*/
}
/*上面整体部分*/
.search_mode {
  width: 100%;
  height: 78px;
  margin-bottom: 10px;
  padding: 10px;
  background: #f2f2f2;
  line-height: 58px;
  box-sizing: border-box;
}
/*搜索框*/
.search_in {
  display: inline-block;
  width: 250px;
}
</style>