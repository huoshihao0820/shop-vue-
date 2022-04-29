<template>
  <div class="Login">
    <div class="content">
      <div>
        <div class="con_top">后台管理员系统登录</div>
        <div class="con_down">
          <div class="acount">
            <div class="span">用户名：</div>
            <input type="text" v-model="acount" />
          </div>
          <div class="pwd">
            <div class="span">密码：</div>
            <input type="password" v-model="pwd" />
          </div>
          <div class="code_img">
            <div id="checkCode" class="code" @click="createCode(4)"></div>
            <div>
              <input type="text" id="inputCode" style="float: left" />
            </div>
          </div>

          <div class="sub" @click="getlogin()">登录</div>
          <div class="register">没有账号密码？点击注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loginapi from "../../api/admin/login";
export default {
  data() {
    return {
      acount: "",
      pwd: "",
      UserInfo: "",
    };
  },
  created() {
 
    this.$nextTick(() => {
      this.createCode(4);
    });
  },
  methods: {
    createCode(length) {
      var code = "";
      var codeLength = parseInt(length); //验证码的长度
      var checkCode = document.getElementById("checkCode");
      // 所有候选组成验证码的字符，当然也可以用中文的
      var codeChars = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      //循环组成验证码的字符串
      for (var i = 0; i < codeLength; i++) {
        //获取随机验证码下标
        var charNum = Math.floor(Math.random() * 62);
        //组合成指定字符验证码
        code += codeChars[charNum];
      }
      if (checkCode) {
        //为验证码区域添加样式名
        checkCode.className = "code";
        //将生成验证码赋值到显示区
        checkCode.innerHTML = code;
      }
    },
    //检查验证码是否正确
    validateCode() {
      //获取显示区生成的验证码
      var checkCode = document.getElementById("checkCode").innerHTML;
      //获取输入的验证码
      var inputCode = document.getElementById("inputCode").value;
      //   console.log(checkCode);
      //   console.log(inputCode);
      if (inputCode.length <= 0) {
        return "401";
      } else if (inputCode.toUpperCase() != checkCode.toUpperCase()) {
        // alert("验证码输入有误！");
        this.createCode(4);
        return "402";
      } else {
        // alert("验证码正确！");
        return "200";
      }
    },
    //登录
    getlogin() {
      var inputCode = this.validateCode();
      //   console.log(inputCode);
      console.log(this.pwd);
      console.log(this.acount);
      if (this.acount == "") {
        this.$message({
          message: "用户名",
          type: "warning",
        });
      } else if (this.pwd == "") {
        this.$message({
          message: "密码",
          type: "warning",
        });
      } else if (inputCode == "401") {
        this.$message({
          message: "请输入验证码",
          type: "warning",
        });
      } else if (inputCode == "402") {
        this.$message({
          message: "验证码输入有误！",
          type: "warning",
        });
      } else {
        loginapi
          .login(this.acount, this.pwd)
          .then((response) => {
            if (response.data.code == 200) {
              this.$router.push({
                path: "/brand/index",
              });
              // localStorage.setItem("myShop_UserInfo", code);
            } else {
              this.$message.error("错了哦，这是一条错误消息");
            }
          })
          .catch((err) => {});
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Login {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  //   background-color: red;
  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .con_top {
      height: 40px;
      line-height: 40px;
      padding-left: 20px;
      background-color: #f5f5f5;
      border: #ddd 1px solid;
      font-size: 20px;
      font-weight: bold;
    }
    .con_down {
      background-color: #fff;
      width: 500px;
      height: 400px;
      border: 1px solid #ddd;
      padding-left: 10px;
      input {
        width: 350px;
        height: 50px;
        border-radius: 10px;
      }

      .acount {
        display: flex;
        height: 70px;
        line-height: 70px;
        padding-top: 20px;
        .span {
          width: 100px;
          font-size: 22px;
        }
      }
      .pwd {
        display: flex;
        height: 70px;
        line-height: 70px;
        .span {
          width: 100px;
          font-size: 22px;
        }
      }
      .code_img {
        height: 80px;
        display: flex;
        width: 380px;
        margin: 0 auto;
        .code {
          font-family: Arial;
          font-style: italic;
          color: blue;
          font-size: 50px;
          border: 0;
          padding: 2px 3px;
          letter-spacing: 3px;
          font-weight: bolder;
          float: left;
          //   cursor: pointer;
          width: 250px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          vertical-align: middle;
          background-color: #d8b7e3;
          /* margin-left: 130px; */
        }
        input {
          width: 200px;
          height: 40px;
          margin-top: 10px;
          // line-height: 40px;
        }
      }
      .sub {
        width: 400px;
        height: 60px;
        background-color: green;
        margin: 20px auto;
        text-align: center;
        line-height: 60px;
        border-radius: 10px;
        font-size: 20px;
        color: #f5f5f5;
      }
      .register {
        float: right;
        margin-right: 60px;
        margin-top: 10px;
        color: #428bca;
      }
    }
  }
}
</style>