<template>
  <div class="brand">
    <div class="content">
      <div class="top">
        <div class="top_left">热门商品</div>
        <div class="top_right">更多</div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item, index) in num" :key="index">
          <div class="item_top">
            <img src="../assets/images/hot3.jpg" alt="" />
          </div>
          <div class="item_con">
            <h2>倩碧特惠组合套装</h2>
            倩碧补水组合套装8折促销
          </div>
          <div class="item_down">
            <span>￥189{{ index }}</span>
            &nbsp;19R
          </div>
        </div>
        <div class="prev" @click="prev()"></div>
        <div class="next" @click="next()"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"  >
.brand {
  width: 1200px;
  margin: 0 auto;

  .content {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      padding: 0px 10px;
      border-bottom: 2px solid red;
      .top_left {
        font-size: 20px;
        color: red;
        font-weight: bold;
      }
      .top_right {
        font-size: 12px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      width: 100%;
      position: relative;
      .item {
        width: 20%;
        height: 228px;
        // background-color: red;
        border: 1px solid #ebebeb;
        border-top: 0px;
        .item_top {
          width: 160px;
          height: 136px;
          margin-top: 5px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item_con {
          height: 40px;
          line-height: 20px;
          overflow: hidden;
          color: #888888;
          font-size: 12px;
          text-align: center;
          margin-top: 10px;
          h2 {
            font-size: 18px;
            font-weight: bold;
            color: #555555;
          }
        }
        .item_down {
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          color: #999999;
          text-align: center;
          font-size: 12px;
          span {
            color: red;
            font-size: 18px;
          }
        }
      }
      .prev {
        position: absolute;
        background: url("../assets/images/b_left.png") no-repeat center top;
        width: 32px;
        height: 60px;
        left: 0px;
        top: 84px;
      }
      .next {
        position: absolute;
        background: url("../assets/images/b_right.png") no-repeat center top;
        width: 32px;
        height: 60px;
        right: 0px;
        top: 84px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      num: 5,
    };
  },
  methods: {
    prev() {
      this.num = 10;
    },
    next(){
      this.num=5
    }
  },
};
</script>