import loginapi from '../../../api/index/login'
export default {
    data() {
        return {
            form:{
                acount:'',
                pwd:'',
                che:''
            }
        }
    },
    methods: {
        submit(){
            loginapi.login(this.form.acount, this.form.pwd).then((response) => {
            if (response.data.code == 200) {
              this.$router.push({
                path: "/",
              });
              if(this.form.che==true){
                localStorage.setItem("myShop_UserInfo",JSON.stringify(this.form) );
              }
            
            } else {
              this.$message.error("错了哦，这是一条错误消息");
            }
          })
          .catch((err) => {});
        },
        goregister(){
          this.$router.push({
            path: "/index/register",
          });
        }
    },
}