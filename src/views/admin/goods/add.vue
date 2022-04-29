<template>
  <div class="add">
    <Index></Index>

    <div class="content">
      <div class="top" style="height: 30px">商品信息 > 商品添加</div>
      <div class="bottom">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="商品名称">
            <el-input v-model="form.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="form.goods_num"></el-input>
          </el-form-item>
          <el-form-item label="上传图片">
              <input type="file" id="image" name="from.goods_img" @change="handleImg" accept="image/jpeg,image/jpg,image/png">
          </el-form-item>
          <el-form-item label="是否最新">
            <el-radio-group v-model="form.is_new">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否最好">
            <el-radio-group v-model="form.is_best">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否最热">
            <el-radio-group v-model="form.is_hot">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否上架">
            <el-radio-group v-model="form.is_up">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="商品介绍">
            <el-input type="textarea" v-model="form.goods_desc"></el-input>
          </el-form-item>

          <el-form-item label="商品分类">
            <el-select v-model="form.cate_id" placeholder="请选择商品分类">
              <el-option
                v-for="(item, index) in CategoryList"
                :key="index"
                :label="item.cate_name"
                :value="item.cate_id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商品品牌">
            <el-select v-model="form.brand_id" placeholder="请选择商品品牌">
              <el-option
                v-for="(item, index) in BrandList"
                :key="index"
                :label="item.brand_name"
                :value="item.brand_id"
              ></el-option>
            </el-select>
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