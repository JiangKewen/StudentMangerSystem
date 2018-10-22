<template>
  <div id="mokuai">
    <div class="search_mode">
      <el-input v-model="search_key" placeholder="请输入关键字" class="search_in"></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="info" @click="dialogFormVisible = true">添加模块</el-button>
      <el-button type="danger" @click="allHnadleDelete">批量删除</el-button>
    </div>
    <div class="table">
    <el-table
      :data="modeData"
      style="width: 100%;"
      @selection-change="handleSelectionChange"
      border
      stripe>
      <el-table-column
        type="selection">
      </el-table-column>
      <el-table-column
        prop="title"
        label="模块名称">
      </el-table-column>
      <el-table-column
        prop="icon"
        label="模块图标">
      </el-table-column>
      <el-table-column
        prop="spread"
        label="节点状态">
      </el-table-column>
      <el-table-column
        prop="href"
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
    <div class="page">
    <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="currentPage"
       :page-sizes="[5, 10, 15, 20]"
       :page-size="5"
       layout="total, sizes, prev, pager, next, jumper"
       :total="total">
     </el-pagination>
   </div>

   <el-dialog title="模块详情" :visible.sync="dialogFormVisible">
     <el-form :model="form">
       <el-form-item label="模块名称" :label-width="formLabelWidth">
         <el-input v-model="form.title" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="模块图标" :label-width="formLabelWidth">
         <el-select v-model="form.icon" placeholder="请选择模块图标">
           <el-option label="图标1" value="icon1"></el-option>
           <el-option label="图标2" value="icon2"></el-option>
         </el-select>
       </el-form-item>
       <el-form-item label="节点状态" :label-width="formLabelWidth">
         <el-radio v-model="form.spread" label="true" value="true">展开</el-radio>
         <el-radio v-model="form.spread" label="false" value="false">关闭</el-radio>
       </el-form-item>
       <el-form-item label="模块链接" :label-width="formLabelWidth">
         <el-input v-model="form.href" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="父级菜单" :label-width="formLabelWidth">
         <el-select v-model="form.parentid" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              placeholder="请选择父级菜单">
            </el-option>
        </el-select>
       </el-form-item>
     </el-form>
     <div slot="footer" class="dialog-footer">
       <el-button type="primary" @click="save()">保 存</el-button>
       <el-button @click="dialogFormVisible = false">取 消</el-button>
     </div>
   </el-dialog>
  </div>
</div>
</template>

<script>
import { navs_page } from "../../api/api.js"
import { navs_detail } from "../../api/api.js"
import { navs_save } from "../../api/api.js"
import { navs_delete } from "../../api/api.js"
import { navs_tree } from "../../api/api.js"
export default {
  name: "MoKuai",
  data() {
    return {
      search_key: '',
      modeData: [],
      total:0,
      currentPage:0,
      pageSize:5,
      dialogTableVisible: false,
       dialogFormVisible: false,
       ids:[],
       options:[{
         value: 0,
        label: '无'
      }, {
         value: 1,
        label: '系统管理'
      }, {
        value: 2,
        label: '业务管理'
      },{
        value: 29,
        label: '测试菜单'
      }],
       form: {
         id:'',
         title: '',
         icon: '',
         spread: '',
         href: '',
         parentid:''
       },
       formLabelWidth: '120px'
    }
  },
  created: function() {
    this.page('','','')
  },
  methods: {
    handleSelectionChange(rows) {
      this.ids = [];
      rows.forEach(row => {
        this.ids.push(row.id)
      })
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true
      this.form = row
    },
    handleDelete(index, row) {
      this.ids.push(row.id)
      this.delete(ids)
    },
    allHnadleDelete(){
      this.delete(this.ids)
    },
    handleSizeChange(val){
      this.pageSize = val
      this.page(this.currentPage,this.pageSize,'')
    },
    handleCurrentChange(val){
      this.currentPage = val
      this.page(this.currentPage,this.pageSize,'')
    },
    page(pageNumber,pageSize,navs){
      console.log(pageNumber,pageSize,navs,'参数')
      navs_page({
        "pageNumber":pageNumber,
        "pageSize":pageSize,
        "navs":navs
      }).then(res => {
        // this.modeData = res
        this.modeData = res.list
        this.total = res.total
        this.currentPage = res.pageNum
      })
    },
    save(){
      let that = this
      navs_save({
          "id":this.form.id,
          "title":this.form.title,
          "icon":this.form.icon,
          "spread":this.form.spread,
          "href":this.form.href,
          "parentid":this.form.parentid
      }).then(res => {
        if(res.state == 2){
          that.dialogFormVisible = false
          that.$message.success(res.message);
          this.page(this.currentPage,this.pageSize,'')
          this.reflash()
        }else{
          that.$message.error(res.message);
        }
      }).catch(function (error) {
          that.$message.error('保存失败！');
      });
    },
    delete(ids){
      let that = this
      navs_delete({
        "id":ids
      }).then(res => {
        if(res.state == 2){
          that.$message.success(res.message);
          this.page(this.currentPage,this.pageSize,'')
        }else{
          that.$message.error(res.message);
        }
      }).catch(function(error){
        that.$message.error('删除失败！');
      });
    },
    reflash(){
      let that = this;
      navs_tree({
        "pid":''
      }).then(res => {
        that.$parent.navs = res
      })
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
.page{
  margin-top: 20px;
  text-align: center;
}
</style>
