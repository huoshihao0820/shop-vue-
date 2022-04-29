<template>
  <div class="menu">
    <div class="content">
      <div class="left">
        <div class="left_top" @mouseover="isshow">全部商品分类</div>
        <div class="left_down">
          <div class="item">
            <div class="item_left">
              <div class="left_img">
                <img src="../assets/images/nav1.png" alt="" />
              </div>
              <div class="left_text">进口食品、生鲜</div>
            </div>
            <div class="item_right">
                <div class="brand_text">
                <div class="item" v-for="(iten, index) in 5" :key="index">
                  <div class="item_top">零食/糖果/巧克力{{ index }}</div>
                  <div class="item_down">
                    <span>坚果 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span>蜜饯 </span>
                    <span> &nbsp;|&nbsp; </span>
                    <span>牛肉干 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span> 巧克力</span>
                    <span> &nbsp;| &nbsp; </span>
                    <span>坚果 </span>
                    <span> &nbsp;| &nbsp; </span>
                    <span>蜜饯 </span>
                    <span> &nbsp;|&nbsp; </span>
                    <span>牛肉干 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span> 巧克力</span>
                    <span>&nbsp;|&nbsp;</span>
                  </div>
                </div>
              </div>
              <div class="brand_img">
                <div class="img_top">
                  <img src="../assets/images/n_img1.jpg" alt="" />
                </div>
                <div class="img_top">
                  <img src="../assets/images/n_img2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item_left">
              <div class="left_img">
                <img src="../assets/images/nav1.png" alt="" />
              </div>
              <div class="left_text">零食 / 糖果 / 巧克力</div>
            </div>
            <div class="item_right">
              <div class="brand_text">
                <div class="item" v-for="(iten, index) in 3" :key="index">
                  <div class="item_top">零食/糖果/巧克力{{ index }}</div>
                  <div class="item_down">
                    <span>坚果 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span>蜜饯 </span>
                    <span> &nbsp;|&nbsp; </span>
                    <span>牛肉干 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span> 巧克力</span>
                    <span> &nbsp;| &nbsp; </span>
                    <span>坚果 </span>
                    <span> &nbsp;| &nbsp; </span>
                    <span>蜜饯 </span>
                    <span> &nbsp;|&nbsp; </span>
                    <span>牛肉干 </span>
                    <span> &nbsp; | &nbsp; </span>
                    <span> 巧克力</span>
                    <span>&nbsp;|&nbsp;</span>
                  </div>
                </div>
              </div>
              <div class="brand_img">
                <div class="img_top">
                  <img src="../assets/images/n_img1.jpg" alt="" />
                </div>
                <div class="img_top">
                  <img src="../assets/images/n_img2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="con">
        <div class="item">首页</div>
        <div class="item">美食</div>
        <div class="item">生鲜</div>
        <div class="item">家具</div>
      </div>
      <div class="right">
        <div>中秋送好礼！</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope >
.menu {
  // background-color: rgb(15, 13, 13);
  margin: 0 auto;
  width: 1200px;
  .content {
    width: 100%;
    font-size: 16px;
    border-bottom: 2px solid #ff3200;
    margin-left: 10px;
    height: 45px;
    // display: flex;
    // justify-content: space-between;
    .left {
      position: relative;

      .left_top {
        // height: 45px;
        float: left;
        width: 211px;
        height: 45px;
        background-color: #ff3200;
        line-height: 43px;
        overflow: hidden;
        color: #fff;
        text-indent: 35px;
      }

      .left_down {
        display: none;
        position: absolute;
        background-color: #ff4e00;
        width: 211px;
        height: 414px;
        top: 45px;
        z-index: 1000;
        .item {
          .item_left {
            // color: #ff3200;
            display: flex;
            background: url("../assets/images/n_arrow.gif") no-repeat 195px
              center;
            height: 40px;
            align-items: center;
            .left_img {
              margin: 0px 10px;
              margin-top: 4px;
            }
            .left_text {
              color: #fff;
            }
          }
          .item_right {
            display: none;
            position: absolute;
            left: 190px;
            top: -14px;
            width: 989px;
            height: 413px;
            overflow: hidden;
            float: left;
            margin-left: 20px;
            margin-top: 15px;
            background-color: #fff;
            .brand_text {
              float: left;
              display: flex;
              width: 770px;
              flex-wrap: wrap;
              overflow: hidden;
              .item {
                width: 280px;
                background-color: #fff;
                margin: 10px 20px;
                .item_top {
                  color: #3e3e3e;
                  font-weight: bold;
                }
                .item_down {
                  margin: 10px 0px;
                  display: flex;
                  flex-wrap: wrap;
                  font-size: 13px;
                  span:nth-child(2n) {
                    color: #dbdbdb;
                  }
                }
              }
            }
            .brand_img {
              float: right;
              width: 211px;
              background-color: yellow;
              height: 412px;
              .img_top {
                height: 206px;
                width: 211px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
        .item:hover {
          background-color: #fff;
          .left_text {
            color: #ff3200;
          }
          .item_right {
            display: block;
          }
        }
      }
    }
    .left:hover {
      .left_down {
        display: block;
      }
    }
    .con {
      float: left;
      // border-bottom: 2px solid #ff3200;
      height: 43px;
      width: 50%;
      display: flex;
      .item {
        width: 70px;
        margin-right: 10px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        color: #3e3e3e;
      }
      .item:hover {
        color: #ff3200;
      }
    }
    .right {
      float: right;
      font-size: 20px;
      margin-right: 15px;
      width: 260px;
      height: 43px;
      line-height: 40px;
      overflow: hidden;
      color: #ff3600;
      font-weight: bold;
      text-align: right;
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
  created() {
    this.$nextTick(() => {
      var aa = document.getElementsByClassName("item_down");
      for (let i = 0; i < aa.length; i++) {
        aa[i].lastChild.remove();
      }
    });
  },
  methods: {
    isshow() {},
  },
};
</script>