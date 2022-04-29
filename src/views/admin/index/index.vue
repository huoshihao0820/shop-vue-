<template>
  <div class="goods">
    <Index></Index>

    <div class="content">
      <div style="height: 30px">管理员信息 > 管理员列表</div>
      <div>
        <el-table :data="tableData" height="600" border style="width: 100%">
          <el-table-column prop="admin_id" label="编号"> </el-table-column>
          <el-table-column prop="admin_name" label="管理员姓名"> </el-table-column>
          <el-table-column prop="admin_tel" label="管理员电话"> </el-table-column>
          <el-table-column prop="admin_head" label="头像" width="100">
          </el-table-column>
          <el-table-column prop="admin_sex" label="性别">
            <template slot-scope="scope">
              <div v-if="scope.row.admin_sex==1">男</div>
              <div v-else>女</div>
            </template>
          </el-table-column>
          <el-table-column prop="admin_email" label="邮箱"> </el-table-column>
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