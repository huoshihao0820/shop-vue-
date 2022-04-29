<template>
  <div class="index">
    <div class="content">
      <div class="top">12</div>
      <div class="con">
        <div class="left">
          <img src="../../../assets/images/big.jpg" alt="" />
        </div>
        <div class="right">
          <div class="right_top">
            <h2 class="r_top_left">登录商城</h2>
            <div class="r_top_right">
              <div class="zc" @click="goregister">注册</div>
            </div>
          </div>
          <form>
            <div class="ac_input">
              <span>用户名：</span
              ><input type="text" placeholder="请输入账号" v-model="form.acount" />
            </div>
            <div class="pw_input">
              <span>密码：</span><input type="text" placeholder="请输入密码" v-model="form.pwd" />
            </div>
            <div class="coo">
              <div class="ac_pw">
                <input type="checkbox" v-model="form.che" /><span>记住账号密码</span>
              </div>
              <div>忘记密码</div>
            </div>
            <div class="sub" @click="submit">登录</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js">
</script>
<style lang="scss" scoped>
.index {
  width: 1200px;
  .content {
    .top {
      width: 100%;
      height: 50px;
    }
    .con {
      width: 100%;
      height: 500px;
      background-color: #fd7a72;
      display: flex;
      .left {
        width: 600px;
        height: 400px;
        margin-top: 20px;
        margin-left: 100px;
      }
      .right {
        margin-top: 20px;
        width: 360px;
        height: 430px;
        background-color: #fff;
        .right_top {
          display: flex;
          .r_top_left {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            padding: 0px 100px 0px 150px;
            font-weight: bold;
          }
          .r_top_right {
            flex: 1;
            height: 50px;
            display: flex;
            align-items: center;
            .zc {
              width: 38px;
              height: 29px;
              background-color: #e6e6e6;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
            }
          }
        }
        form {
          .ac_input {
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
              width: 64px;
            }
            input {
              outline: none;
              width: 250px;
              height: 42px;
            }
          }
          .pw_input {
            margin-top: 10px;
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
              width: 64px;
            }
            input {
              outline: none;
              width: 250px;
              height: 42px;
            }
          }
          .coo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 25px;
            font-size: 12px;
            .ac_pw {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          }
          .sub {
            display: flex;
            background-color: #0e90d2;
            height: 40px;
            justify-content: center;
            align-items: center;
            margin: 0px 25px;
            color: #e6e6e6;
          }
        }
      }
    }
  }
}
</style>