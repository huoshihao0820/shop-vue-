<template>
  <div class="Code">
    <div class="content">
      <table border="0" cellspacing="5" cellpadding="5">
        <tr>
          <td>
            <div id="checkCode" class="code" @click="createCode(4)"></div>
          </td>
      
        </tr>
        <tr>
          <td>验证码：</td>
          <td><input type="text" id="inputCode" style="float: left" @blur="isCode()"/></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$nextTick(()=>{
        this.createCode(4);
    })
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

        isCode(){
            this.validateCode()
    },
    //检查验证码是否正确
    validateCode() {
      //获取显示区生成的验证码
      var checkCode = document.getElementById("checkCode").innerHTML;
      //获取输入的验证码
      var inputCode = document.getElementById("inputCode").value;
      console.log(checkCode);
      console.log(inputCode);
      if (inputCode.length <= 0) {
        alert("请输入验证码！");
      } else if (inputCode.toUpperCase() != checkCode.toUpperCase()) {
        alert("验证码输入有误！");
        this.createCode(4);
      } else {
        alert("验证码正确！");
      }
    },
  },
};
</script>

<style>
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
  cursor: pointer;
  width: 250px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  vertical-align: middle;
  background-color: #d8b7e3;
  /* margin-left: 130px; */
}
span {
  text-decoration: none;
  font-size: 12px;
  color: #288bc4;
  padding-left: 10px;
}

span:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
