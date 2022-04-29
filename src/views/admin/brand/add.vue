<template>
  <div class="add">
    <Index></Index>

    <div class="content">
      <div class="top" style="height: 30px">品牌信息 > 品牌添加</div>
      <div class="bottom">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="品牌名称">
            <el-input v-model="form.brand_name"></el-input>
          </el-form-item>
          <el-form-item label="品牌网站">
            <el-input v-model="form.brand_url"></el-input>
          </el-form-item>
        
          <el-form-item label="品牌logo">
              <input type="file" id="image" name="from.brand_logo" @change="handleImg" accept="image/jpeg,image/jpg,image/png">
          </el-form-item>
          <el-form-item label="是否展示">
            <el-radio-group v-model="form.brand_show">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
       

          <el-form-item>
            <el-button type="primary" @click="onSubmit()">{{ state }}</el-button>
            <el-button v-if="this.$route.query.goods_id" @click="unupd">取消</el-button>
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