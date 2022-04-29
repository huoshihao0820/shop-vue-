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
            <h2 class="r_top_left" @click="isemail" :class="state?'red':''">邮箱注册</h2>
            <h2 class="r_top_left" @click="isemail" :class="state?'':'red'">手机号注册</h2>
            <div class="r_top_right">
              <div class="zc" @click="gologin">登录</div>
            </div>
          </div>
          <div class="email" v-if="state">
            <form>
              <div class="ac_input">
                <span>邮箱：</span
                ><input
                  type="text"
                  placeholder="请输入邮箱"
                  v-model="form.acount"
                />
              </div>
               <div class="ac_code">
                <span>验证码：</span
                ><input
                  type="text"
                  placeholder="请输入邮箱"
                  v-model="form.code"
                />
                <div class="hq" @click="getcode">获取</div>
              </div>
              <div class="pw_input">
                <span>密码：</span
                ><input
                  type="text"
                  placeholder="请输入密码"
                  v-model="form.pwd"
                />
              </div>
                <div class="pw_input">
                <span>确认密码：</span
                ><input
                  type="text"
                  placeholder="确认密码"
                  v-model="form.pwd2"
                />
              </div>
            
              <div class="sub" @click="submit">注册</div>
            </form>
          </div>
           <div class="tel" v-else>
             <form>
              <div class="ac_input">
                <span>手机号：</span
                ><input
                  type="text"
                  placeholder="请输入手机号"
                  v-model="form.acount"
                />
              </div>
               <div class="ac_code">
                <span>验证码：</span
                ><input
                  type="text"
                  placeholder="请输入验证码"
                  v-model="form.code"
                />
                <div class="hq" @click="getcode2">获取</div>
              </div>
              <div class="pw_input">
                <span>密码：</span
                ><input
                  type="text"
                  placeholder="请输入密码"
                  v-model="form.pwd"
                />
              </div>
                <div class="pw_input">
                <span>确认密码：</span
                ><input
                  type="text"
                  placeholder="确认密码"
                  v-model="form.pwd2"
                />
              </div>
            
              <div class="sub" @click="submit">注册</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./register.js">
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
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            font-weight: bold;
          }
          .red{
              border-bottom: #fd7a72 1px solid;
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
            margin-top: 20px;
          .ac_input {
            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
                            width: 80px;

            }
            input {
              outline: none;
              width: 250px;
              height: 42px;
            }
          }
           .ac_code {
            margin-top: 10px;

            display: flex;
            align-items: center;
            margin-left: 10px;
            span {
                            width: 80px;

            }
            input {
              outline: none;
              width: 150px;
              height: 42px;
            }
            .hq{
                margin-left: 20px;
                width: 45px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid  #DDD;
                background-color: #f4f4f4;
            }
          }
          .pw_input {
            margin-top: 10px;
            display: flex;
            align-items: center;
            margin-left: 10px;
            margin-bottom: 10px;
            span {
              width: 80px;
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