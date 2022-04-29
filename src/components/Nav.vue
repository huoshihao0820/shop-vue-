<template>
  <div class="Nav">
    <div class="content">
      <div class="top">
        <img src="../assets/images/mban_1.jpg" alt="" />
      </div>
      <div class="con">
        <div class="con_left">
          <div>{{ num }}F</div>
          <div>进口<span>·</span> 生鲜</div>
        </div>
        <div class="con_right">
          <div>进口咖啡</div>
          <div>进口酒</div>
          <div>进口母婴</div>
          <div>新鲜蔬菜</div>
          <div>新鲜水果</div>
        </div>
      </div>
      <div class="bottm">
        <div class="item" v-for="(item, index) in 6" :key="index">
          <div class="item_text">新鲜美味 进口美食{{ index }}</div>
          <div class="item_price">
            <font>￥ <span>198.00</span></font>
            26R
          </div>
          <div class="item_img">
            <img src="../assets/images/fre_1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Nav {
  // background-color: #eaeaea;
  margin: 0 auto;
  width: 1200px;
  padding-top: 20px;
  .content {
    .top {
      margin: 0px 10px;
    }
    .con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 39px;
      padding: 5px;
      border-bottom: 2px solid #ff4e00;
      .con_left {
        display: flex;
        align-items: center;

        div:nth-child(1) {
          width: 33px;
          height: 34px;
          background: url("../assets/images/floor.png") no-repeat center top;
          line-height: 40px;
          overflow: hidden;
          color: #fff;
          font-size: 14px;
          // text-transform: uppercase;
          text-indent: 6px;
          // display: inline;
          margin-right: 15px;
          margin-left: 10px;
        }
        div:nth-child(2) {
          color: red;
          font-size: 20px;
          span {
            font-weight: bold;
          }
        }
      }
      .con_right {
        display: flex;
        justify-content: space-around;
        width: 400px;
        font-size: 12px;
        color: #555555;
      }
    }
    .bottm {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 441px;
      overflow: hidden;
      background-color: #fff;
      .item {
        width: 299px;
        height: 221px;
        background-color: #fff;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-left: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        div:last-child {
        }
        .item_text {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          margin-top: 12px;
        }
        .item_price {
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          color: #999999;
          // text-indent: 88px;
          // text-transform: uppercase;
              font-size: 12px;
          font {
            color: #ff4e00;
            font-size: 14px;
            span {
              font-size: 16px;
            }
          }
        }
        .item_img {
          width: 188px;
          height: 155px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {},
};
</script>