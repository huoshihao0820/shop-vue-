<template>
  <div class="cate">
    <Index></Index>

    <div class="content">
      <div style="height: 30px">分类信息 > 分类列表</div>
      <div>
        <el-table :data="tableData" height="600" border style="width: 100%">
          <el-table-column prop="cate_id" label="编号"> </el-table-column>
          <el-table-column prop="cate_name" label="分类名称"> </el-table-column>
          <el-table-column prop="cate_show" label="是否展示"> </el-table-column>
          <el-table-column prop="cate_nav_show" label="是否在导航栏展示" width="100">
          </el-table-column>
          <el-table-column prop="parent_id" label="父级分类">
          </el-table-column>
        
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small"  @click="del(scope.row)">删除</el-button>

              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cate {
  width: 100%;
  height: 100%;
  .content {
    padding-left: 210px;
    padding-top: 60px;
    border: 1px;
  }
}
</style>
<script src='./index.js'>
</script>