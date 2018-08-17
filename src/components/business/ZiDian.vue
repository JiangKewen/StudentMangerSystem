<template>
  <div id="zidian">
    <el-row>
      <el-col :span="12">
        <el-tree :data="tree_data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col :span="8">
        <el-form label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name" size="small"></el-input>
          </el-form-item>
          <el-form-item label="编码">
            <el-input v-model="formLabelAlign.code" size="small"></el-input>
          </el-form-item>
          <el-form-item label="父节点">
            <el-input v-model="formLabelAlign.fa_code" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="">保存节点</el-button>
            <el-button @click="">重置</el-button>
            <el-button type="danger" @click="">删除节点</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ZiDian",
  data() {
    return {
      tree_data: [
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      formLabelAlign: {
        name: '',
        code: '',
        fa_code: ''
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>
#zidian {
  padding: 40px 30px;
}
</style>