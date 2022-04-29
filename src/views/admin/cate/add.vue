<template>
  <div class="add">
    <Index></Index>

    <div class="content">
      <div class="top" style="height: 30px">分类信息 > 分类添加</div>
      <div class="bottom">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="分类名称">
            <el-input v-model="form.cate_name"></el-input>
          </el-form-item>
        
       
          <el-form-item label="是否展示">
            <el-radio-group v-model="form.cate_show">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否在导航栏展示">
            <el-radio-group v-model="form.cate_nav_show">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        

          <el-form-item label="父分类">
            <el-select v-model="form.parent_id" placeholder="请选择商品分类">
              <el-option
                v-for="(item, index) in CategoryList"
                :key="index"
                :label="item.cate_name"
                :value="item.cate_id"
              ></el-option>
            </el-select>
          </el-form-item>
       
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">{{ state }}</el-button>
            <el-button v-if="this.$route.query.cate_id" @click="unupd">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add {
  width: 100%;
  height: 100%;
  .content {
    padding-left: 210px;
    padding-top: 60px;
    border: 1px;
    .bottom {
      margin-left: 100px;
      width: 700px;
    }
  }
}
</style>
<script src="./add.js">
</script>