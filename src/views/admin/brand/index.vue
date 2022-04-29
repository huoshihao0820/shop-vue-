<template>
  <div class="bran">
    <Index></Index>
    
    <div class="content">
      <div style="height: 30px">品牌信息 > 品牌列表</div>
      <div>
        <el-table :data="tableData" height="600" border style="width: 100%">
          <el-table-column prop="brand_id" label="编号"> </el-table-column>
          <el-table-column prop="brand_logo" label="图片" width="100">
          </el-table-column>
          <el-table-column prop="brand_name" label="品牌名称">
          </el-table-column>
          <el-table-column prop="brand_url" label="品牌网站"> </el-table-column>
          <el-table-column prop="brand_show" label="是否展示">
            <template slot-scope="scope">
              
              <div v-if="scope.row.brand_show==1">展示</div>
              <div v-else>不展示</div>
            </template>
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
.bran{
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