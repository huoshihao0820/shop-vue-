<template>
  <div class="search">
    <div class="content">
      <div class="left"><img src="../assets/images/logo.png" alt="" /></div>
      <div class="con">
        <input type="text" class="input" />
        <input type="button" class="sub" value="搜索" />
        <div class="span">
          <span>咖啡</span>
          <span>咖啡</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="right">
        <div class="right_img">购物车 [ <span>1</span> ]</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope >
.search {
  margin: 0 auto;
  width: 1200px;
  .content {
    height: 140px;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    .left {
      margin-left: 10px;

      margin-top: 40px;
      width: 207px;
      height: 55px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .con {
      margin-top: 50px;

      .input {
        outline: none;
        width: 408px;
        height: 36px;
        overflow: hidden;
        color: #555555;
        font-size: 14px;
        float: left;
        padding: 0 10px;
        border: 2px solid #ff4e00;
        border-right: 0;
      }
      .sub {
        width: 90px;
        height: 40px;
        background-color: #ff4e00;
        color: #fff;
        font-size: 16px;
        text-align: center;
        float: left;
        border: 0;
      }
      .span {
        font-size: 12px;
        line-height: 25px;
        color: #555555;
        span{
          margin-right: 10px;
        }
      }
    }
    .right {
      margin-top: 50px;
      width: 141px;
      height: 38px;
      line-height: 38px;
      background: url("../assets/images/car.png") no-repeat 10px center;
      background-color: #f6f6f6;
      float: right;
      margin-right: 10px;
      border: 1px solid #d9d9d9;
      position: relative;
      .right_img {
        width: 95px;
        height: 38px;
        overflow: hidden;
        background: url("../assets/images/d_arrow.png") no-repeat right center;
        font-size: 14px;
        margin-left: 38px;
        // cursor: pointer;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      ishedden: false,
    };
  },
  methods: {},
};
</script>