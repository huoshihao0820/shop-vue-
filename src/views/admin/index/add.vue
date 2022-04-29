<template>
  <div class="add">
    <Index></Index>

    <div class="content">
      <div class="top" style="height: 30px">管理员信息 > 管理员添加</div>
      <div class="bottom">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="管理员名称">
            <el-input v-model="form.admin_name"></el-input>
          </el-form-item>
          <el-form-item label="管理员电话">
            <el-input v-model="form.admin_tel"></el-input>
          </el-form-item>
          <el-form-item label="管理员邮箱">
            <el-input v-model="form.admin_email"></el-input>
          </el-form-item>
           <el-form-item label="性别">
            <el-radio-group v-model="form.admin_sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="头像">
              <input type="file" id="image" name="from.admin_head" @change="handleImg" accept="image/jpeg,image/jpg,image/png">
          </el-form-item>
           <el-form-item label="管理员密码" prop="pass" v-if="form.admin_id==null">
            <el-input type="password" auto-complete="off" v-model="form.admin_pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" v-if="form.admin_id==null" >
            <el-input type="password" auto-complete="off" v-model="form.admin_pwd2"></el-input>
          </el-form-item>
        
      
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">{{ state }}</el-button>
            <el-button v-if="this.$route.query.admin_id" @click="unupd">取消</el-button>
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