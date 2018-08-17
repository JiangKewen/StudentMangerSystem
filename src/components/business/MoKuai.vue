<template>
  <div id="mokuai">
    <div class="search_mode">
      <el-input v-model="search_key" placeholder="请输入关键字" class="search_in"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="info">添加模块</el-button>
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
        prop="date"
        label="模块名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="模块图标">
      </el-table-column>
      <el-table-column
        prop="address"
        label="节点状态">
      </el-table-column>
      <el-table-column
        prop="link"
        label="模块链接">
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
  name: "MoKuai",
  data() {
    return {
      search_key: '',
      modeData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          link: "/system/actions/11"
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          link: "/system/actions/21"
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          link: "/system/actions/31"
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          link: "/system/actions/41"
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
#mokuai {
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