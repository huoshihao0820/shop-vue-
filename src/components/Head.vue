<template>
  <div class="head">
    <div class="content">
      <div class="left">
        <div class="left_left">送货至：</div>
        <div class="left_right">
          <div>北京</div>
          <div class="down"></div>
        </div>
      </div>
      <div class="right">
        <div style="display: flex" v-if="UserInfo == null">
          <div style="margin-right: 20px">
            您好，请<span style="color: red" @click="gologin">登录</span>
          </div>
          <div style="margin-right: 20px">
            <span href="" style="color: #ff4e00" @click="goregister">免费注册</span>
          </div>
        </div>
        <div style="display: flex" v-else>
          <div style="margin-right: 20px">
            欢迎<a href="javascript:;">{{ UserInfo.acount }}</a>
          </div>
          <div style="margin-right: 20px">
            <span @click="goout" style="color: #ff4e00">退出</span>
          </div>
        </div>

        <div style="margin-right: 20px">|</div>
        <div style="margin-right: 20px" class="right_con">我的订单</div>
        <div style="margin-right: 20px">|</div>
        <div
          style="margin-right: 10px"
          class="right_con aaa"
          @mouseover="isshow()"
        >
          <div>收藏夹</div>
          <div class="down"></div>
          <div class="flold_div">
            <div class="div_item">我的收藏夹</div>
            <div class="div_item">我的收藏夹</div>
          </div>
        </div>
        <div style="margin-right: 10px" class="right_con">
          <div>客户服务</div>
          <div class="down"></div>
          <div class="flold_div">
            <div class="div_item">客户服务</div>
            <div class="div_item">客户服务</div>
            <div class="div_item">客户服务</div>
          </div>
        </div>
        <div style="margin-right: 10px" class="right_con">
          <div>网站导航</div>
          <div class="down"></div>
          <div class="flold_div">
            <div class="div_item">网站导航</div>
            <div class="div_item">网站导航</div>
            <div class="div_item">网站导航</div>
            <div class="div_item">网站导航</div>
          </div>
        </div>
        <div style="margin-right: 20px">|</div>
        <div class="img">
          <div>关注我们:</div>
          <div class="images">
            <img src="../assets/images/sh1.png" alt="" />
          </div>
          <div class="images">
            <img src="../assets/images/sh2.png" alt="" />
          </div>
        </div>
        <div style="margin-right: 20px">|</div>
        <div style="margin-right: 20px" class="img">
          <div class="right_con">手机版</div>
          <div class="images">
            <img src="../assets/images/s_tel.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scope>
.down {
  width: 5px;
  height: 5px;
  border: 1px solid red;
  transform: rotate(45deg);
  border-width: 0px 1px 1px 0px;
}
.head {
  width: 1200px;
  margin: 0 auto;
  height: 35px;
  background-color: rgb(246, 246, 246);
  // background-color: red;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      font-size: 12px;
      margin-left: 10px;
      display: flex;
      .left_right {
        display: flex;
        align-items: center;
        .down {
          width: 4px;
          height: 4px;
          border: 1px solid #555555;
          transform: rotate(45deg);
          border-width: 0px 1px 1px 0px;
          margin-left: 4px;
        }
      }
    }
    .right {
      display: flex;
      font-size: 12px;
      align-items: center;
      a {
        text-decoration: none;
        cursor: pointer;
      }
      .right_con {
        position: relative;
        height: 35px;
        .flold_div {
          display: none;
          position: absolute;
          top: 35px;
          left: -25px;
          width: 100px;
          //   justify-content: space-around;
          overflow: hidden;
          background-color: #fff;
          padding: 10px 0;
          border: 1px solid #cdcdcd;
          .div_item {
            height: 20px;
            text-align: center;
            color: #555555;
          }
        }

        //   margin-right: 20px;
        display: flex;
        align-items: center;
        .down {
          width: 4px;
          height: 4px;
          border: 1px solid #555555;
          transform: rotate(45deg);
          border-width: 0px 1px 1px 0px;
          margin: 0px 8px;
        }
      }
      .right_con:hover {
        color: red;
        .flold_div {
          display: block;
        }
        .flold_div .div_item:hover {
          color: red;
        }
      }
      .img {
        //   height: 35px;
        display: flex;
        align-items: center;
        .images {
          //   width: 16px;
          //   height: 16px;
          display: flex;
          //   background: #555555;
          padding: 0 5px;
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
      ishedden: false,
      UserInfo: null,
    };
  },
  created() {
    this.islogin();
  },
  methods: {
    islogin() {
      if (localStorage.getItem("myShop_UserInfo")) {
        this.UserInfo = localStorage.getItem("myShop_UserInfo");
        this.UserInfo = JSON.parse(this.UserInfo);
        console.log(this.UserInfo);
      } else {
        this.UserInfo=null
      }
    },
    gologin() {
      this.$router.push({
        path: "/index/login",
        query: {},
      });
    },
    goout() {
      localStorage.clear();
      this.islogin();
    },
      goregister(){
          this.$router.push({
            path: "/index/register",
          });
        },
    isshow(e) {
      // this.ishedden = true;
    },
    unshow() {
      // this.ishedden=false
    },
  },
};
</script>