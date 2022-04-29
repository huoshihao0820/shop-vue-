<template>
  <div class="goods">
    <Index></Index>

    <div class="content">
      <div style="height: 30px">商品信息 > 商品列表</div>
      <div>
        <el-table :data="tableData" height="600" border style="width: 100%">
          <el-table-column prop="brand_name" label="品牌"> </el-table-column>
          <el-table-column prop="cate_name" label="分类"> </el-table-column>
          <el-table-column prop="goods_id" label="商品ID"> </el-table-column>
          <el-table-column prop="goods_img" label="图片" width="100">
          </el-table-column>
          <el-table-column prop="goods_name" label="商品名称">
          </el-table-column>
          <el-table-column prop="goods_num" label="商品数量"> </el-table-column>
          <el-table-column prop="goods_desc" label="商品介绍">
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
.goods {
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