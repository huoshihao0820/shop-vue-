<template>
  <div class="home">
    <Head></Head>
    <Search></Search>
    <Menu></Menu>
    <div class="banner">
      <div class="left">
        <div class="left_top">
          <img src="../assets/images/n_img1.jpg" alt="" />
        </div>
        <div class="left_top">
          <img src="../assets/images/n_img2.jpg" alt="" />
        </div>
      </div>
      <div class="con">
        <el-carousel height="401px">
          <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <h3 class="small">
              <img :src="item.img" alt="" />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <div class="right_top">
          <div class="top_top">
            <div>新闻资讯</div>
            <div>更多></div>
          </div>
          <div class="top_down">
            <div class="down_down">
              <div class="down_left">[ 特惠 ]</div>
              <div class="down_right">掬一轮明月 表无尽惦念</div>
            </div>
            <div class="down_down">
              <div class="down_left">[ 特惠 ]</div>
              <div class="down_right">掬一轮明月 表无尽惦念</div>
            </div>
          </div>
        </div>
        <div class="right_down">
          <div class="down_top">
            话费充值
            <div class="down_top_span"></div>
          </div>
          <div class="down_down">
            <form action="">
              <div class="form_input">号码 <input type="text" /></div>
              <div class="form_select">
                面值
                <select v-model="money" id="">
                  <option value="10">10元</option>
                  <option value="20">20元</option>
                </select>
                <span>￥{{ newMoney }}</span>
              </div>
              <input class="form_submit" type="submit" value="立即充值" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Brand></Brand>
    <Nav></Nav>
    <Bottom></Bottom>
  </div>
</template>
<script src="./Home.js">
import Bottom from "../components/Bottom.vue";
</script>
<style lang="scss" >
.home {
  // margin-left: 500px;
  margin: 0 auto;
  width: 1200px;
  .banner {
    margin-left: 10px;
    display: flex;

    .left {
      width: 211px;
      background-color: yellow;
      height: 412px;
      .left_top {
        height: 206px;
        width: 211px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .con {
      margin: 0px 10px;
      width: 740px;
      height: 401px;
      margin-top: 10px;
      // background-color: rgb(121, 120, 128);
      display: flex;
      flex-direction: column;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 401px;
        margin: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .right {
      height: 401px;
      margin-top: 10px;
      width: 225px;
      // background-color: rgb(35, 17, 151);
      border: 1px solid #d9d9d9;
      .right_top {
        border-bottom: 1px solid #d9d9d9;
        height: 220px;
        //  padding: 10px 10px 20px 10px;
        .top_top {
          display: flex;
          justify-content: space-between;
          height: 40px;
          align-items: center;
          padding: 0px 10px;
          border-bottom: 1px dotted #d9d9d9;
          div:nth-child(1) {
            font-size: 16px;
            color: #3e3e3e;
          }
          div:nth-child(2) {
            font-size: 12px;
            color: #888888;
          }
        }
        .top_down {
          padding: 10px 0px;
          .down_down {
            display: flex;
            align-items: center;
            height: 30px;
            margin: 0px 10px;
            font-size: 12px;
            .down_left {
              color: #3e3e3e;
              margin-right: 10px;
            }
            .down_right {
              color: #888888;
            }
          }
        }
      }
      .right_down {
        .down_top {
          height: 39px;
          line-height: 39px;
          color: #3e3e3e;
          font-size: 16px;
          padding: 0 10px;
          border-bottom: 1px dotted #d9d9d9;
          position: relative;
          .down_top_span {
            position: absolute;
            background: url("../assets/images/d_a.gif") no-repeat center top;
            width: 11px;
            height: 7px;
            line-height: 7px;
            left: 28px;
            top: 39px;
          }
        }
        .down_down {
          margin-top: 10px;
          margin-left: 10px;
          .form_input {
            font-size: 12px;
            input {
              width: 118px;
              height: 23px;
              border: 1px solid #d9d9d9;
            }
          }
          .form_select {
            margin-top: 10px;
            font-size: 12px;

            select {
              width: 126px;
              height: 23px;
              border: 1px solid #d9d9d9;
            }
          }
          .form_submit {
            background-color: #ff4e00;
            border: 0px;
            color: #ffffff;
            margin-top: 10px;
            width: 80px;
            height: 26px;
          }
          span {
            color: red;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>